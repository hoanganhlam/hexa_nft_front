<template>
  <section class="pt-20 pb-12 dark:bg-gray-900">
    <div class="container my-8 px-4 md:px-0 mx-auto">
      <div>
        <span class="font-bold mb-2" style="color: #F36237">CRYPTO HERO</span>
        <div class="flex justify-between mb-6 items-center">
          <h2 class="text-6xl font-medium">Heroes {{ $route.params.flag === 'lp_genesis' ? 'LP' : '' }}</h2>
        </div>
        <p class="text-gray-300 mb-10">Collectibles of HERO cards with the uniqueness of each character.</p>
        <client-only>
          <div class="flex flex-col md:flex-row -mx-2">
            <div class="mx-2 mb-4 md:mb-0">
              <div class="btn-primary" @click="handleApprove" :class="{'animate-pulse': approving}">
                <template v-if="isAuthenticated">
                  <span v-if="isApprove">Manage stake</span>
                  <span v-else>Approve {{isLP ? "FLIP" : "HERO"}}</span>
                </template>
                <span v-else>Unlock wallet</span>
              </div>
            </div>
            <div class="mx-2">
              <div class="-mx-2 flex">
                <div v-if="isAuthenticated" class="px-2">
                  <div class="number-less border-2 border-gray-900 font-bold md:p-4 py-2 md:text-center">
                    <span>{{ nFormatter(balance, 1) }} {{isLP ? "$FLIP" : "HERO"}} staked</span>
                    <span class="data">{{ balance }} {{isLP ? "$FLIP" : "HERO"}} staked</span>
                  </div>
                </div>
                <div v-if="isAuthenticated" class="px-2">
                  <div class="number-less border-2 border-gray-900 font-bold md:p-4 py-2 md:text-center">
                    <span>{{ nFormatter(earned, 1) }} hexa</span>
                    <span class="data">{{ earned }} hexa earned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </client-only>
      </div>
    </div>
    <div class="container px-6 md:px-0 my-8 mx-auto">
      <div v-if="fetching" class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="i in 12" :key="i" class="flex flex-col border rounded dark:border-gray-700 cursor-pointer">
          <div class="p-4 flex-1">
            <div class="goku-skeleton">
              <div class="wrap flex flex-col justify-center items-center">
                <svg class="loading" viewbox="0 0 100 80">
                  <g transform="translate(50 0) scale(0.707 0.707) rotate(45 0 0)">
                    <rect class="rect" id="rect1" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="#52734d"/>
                    <rect class="rect" id="rect2" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="#91c788"/>
                    <rect class="rect" id="rect3" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="#ddffbc"/>
                    <rect class="rect" id="rect4" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="#feffde"/>
                    <rect class="rect" id="rect5" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="#ffb037"/>
                    <rect class="rect" id="rect6" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="#ffe268"/>
                    <rect class="rect" id="rect7" x="0" y="0" width="30" height="30" rx="2" ry="2" fill="gold"/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="mb-2 font-bold">
              <div class="h-4 w-3/2 bg-gray-100 animate-pulse"></div>
            </div>
            <div class="-mx-1 h-4 flex flex-wrap">
              <div v-for="j in 2" :key="j" class="px-1 w-1/2 h-4">
                <div class="h-4 bg-gray-100 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div
            class="border-t border-gray-700 bg-gray-50 p-4 py-2 cursor-pointer text-xs font-bold text-center dark:bg-opacity-0">
            <div class="mx-auto h-4 w-1/2 bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="(data, i) in dataset" :key="i" class="flex flex-col cursor-pointer mb-12">
          <video muted loop autoplay playsinline :id="`video_${i}`" class="rounded-tl rounded-tr">
            <source :src="data.image">
          </video>
          <div class="py-4 z-10 flex-1 border-b border-gray-700 mb-4">
            <div class="-mt-7 mb-2 w-full flex justify-center" v-if="data.supply">
              <div class="mx-auto rounded-3xl inline-flex bg-white text-black">
                <div class="flex space-x-2 text-xs">
                  <span class="p-1 px-2 text-gray-500">{{ data.supply.total }} MINTED</span>
                  <span class="p-1 text-white px-2 rounded-br-3xl rounded-tr-3xl" style="background: #F36237">{{ data.supply.max - data.supply.total }} LEFT</span>
                </div>
              </div>
            </div>
            <h4 class="mb-2 font-bold">{{ data.name }}</h4>
          </div>
          <div class="w-auto md:w-full flex justify-center">
            <div class="btn-secondary sm justify-center w-auto md:w-full" @click="redeem(data)">
              <span v-if="data.points <= earned">Redeem</span>
              <span v-else>You need {{ data.points }} BALLs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SVGIcon from "@/components/Icon.vue";
import {ABI_1155, ABI_GENESIS, ABI_TOKEN} from "@/plugins/abi";
import Web3 from "web3";

const rpcURL = process.env.rpcURL
const MAX_INT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const CONTRACT = {
  lp_genesis: process.env.CONTRACT_LP_GENESIS,
  genesis: process.env.CONTRACT_GENESIS
}

export default {
  name: "PageCharacter",
  components: {icon: SVGIcon},
  data() {
    return {
      dataset: [],
      fetching: false,
      contractGenesis: null,
      token: process.env.CONTRACT_TOKEN,
      token1155: process.env.CONTRACT_TOKEN_1155,
      balance: 0,
      earned: 0,
      allowance: 0,
      approving: false
    }
  },
  methods: {
    /* FETCH API */
    fetch() {
      this.fetching = true;
      this.dataset = [];
      this.$axios.$get(`/pools/${this.$route.params.flag}`).then(res => {
        res.forEach(async data => {
          this.$set(data, 'supply', await this.getSupply(data.id))
        })
        this.dataset = res;
        this.fetching = false;
      })
    },
    /* APPROVE */
    async handleApprove() {
      if (this.$store.state.auth.wallet && this.contractGenesis) {
        if (this.isApprove) {
          this.setModal('manage', this.contractGenesis)
        } else {
          this.approving = true;
          await this.approveAll(this.$store.state.auth.wallet, this.contractGenesis)
          setInterval(() => {
            if (this.approving) {
              this.getAllowance(this.$store.state.auth.wallet, this.contractGenesis)
              if (this.isApprove) {
                this.approving = false;
              }
            }
          }, 1000)
        }
      } else {
        this.setModal('connect', null)
      }
    },
    async approveAll(owner, spender) {
      const w3 = new Web3(rpcURL)
      const contractInstance = new w3.eth.Contract(ABI_TOKEN, this.token);
      const data = contractInstance.methods.approve(spender, MAX_INT).encodeABI();
      const nonce = await w3.eth.getTransactionCount(owner, 'pending');
      const gasLimit = 400000;
      const gasPrice = 20000000000;
      const transaction = {
        from: owner,
        to: this.token,
        value: 0,
        data,
        nonce: nonce.toString(16),
        gas: gasLimit.toString(16),
        gasPrice: gasPrice.toString(16)
      };

      const connect = this.getConnection()
      if (connect) {
        if (connect.connect_type === 'metamask') {
          await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transaction],
          }).catch(e => {
            console.log(e);
          })
        } else if (connect.connect_type === 'walletconnect') {
          await connect.connector.sendTransaction(transaction).catch(e => {
            console.log(e);
          })
        }
      }
    },
    /* CHECK ALLOWANCE*/
    async getAllowance(owner, spender) {
      const connect = this.getConnection()
      if (connect) {
        const w3 = new Web3(rpcURL)
        const contractInstance = new w3.eth.Contract(ABI_TOKEN, this.token);
        this.allowance = await contractInstance.methods.allowance(owner, spender).call();
      }
    },
    /* LOAD BLOCKCHAIN */
    async getEarned() {
      const connect = this.getConnection()
      if (connect) {
        const w3 = new Web3(rpcURL)
        const contractInstance = new w3.eth.Contract(ABI_GENESIS, this.contractGenesis);
        this.earned = await contractInstance.methods.earned(this.$store.state.auth.wallet).call()
      }
    },
    async getBalance() {
      const connect = this.getConnection()
      if (connect) {
        const w3 = new Web3(rpcURL)
        const contractInstance = new w3.eth.Contract(ABI_GENESIS, this.contractGenesis);
        this.balance = await contractInstance.methods.balanceOf(this.$store.state.auth.wallet).call()
      }
    },
    async loadBlockChain() {
      if (this.$store.state.auth.wallet && this.$route.params.flag) {
        this.contractGenesis = CONTRACT[this.$route.params.flag]
        if (this.contractGenesis) {
          await this.getAllowance(this.$store.state.auth.wallet, this.contractGenesis)
          await this.getEarned()
          await this.getBalance()
        }
      }
    },
    /* REDEEM ITEM */
    async redeem(item) {
      if (item.points <= Number.parseInt(this.earned)) {
        const gasLimit = 400000;
        const gasPrice = 20000000000;
        const w3 = new Web3(rpcURL)
        const contractInstance = new w3.eth.Contract(ABI_GENESIS, this.contractGenesis);
        const data = contractInstance.methods.redeem(item.id).encodeABI();
        const nonce = await w3.eth.getTransactionCount(this.$store.state.auth.wallet, 'pending');
        const transaction = {
          from: this.$store.state.auth.wallet,
          to: this.contractGenesis,
          value: 0,
          data,
          nonce: nonce.toString(16),
          gas: gasLimit.toString(16),
          gasPrice: gasPrice.toString(16)
        };
        const connect = this.getConnection()
        if (connect) {
          if (connect.connect_type === 'metamask') {
            await ethereum.request({
              method: 'eth_sendTransaction',
              params: [transaction],
            }).then(() => {
              this.$store.commit('auth/NOTIFY', "Redeem request was sent!")
            }).catch(e => {
              console.log(e);
            })
          } else if (connect.connect_type === 'walletconnect') {
            await connect.connector.sendTransaction(transaction)
              .then(() => {
                this.$store.commit('auth/NOTIFY', "Redeem request was sent!")
              })
              .catch(e => {
              console.log(e);
            })
          }
        }
      }
    },
    /* ITEM SUPPLY */
    async getSupply(id) {
      const w3 = new Web3(rpcURL)
      const contractInstance = new w3.eth.Contract(ABI_1155, this.token1155);
      return {
        total: await contractInstance.methods.totalSupply(id).call(),
        max: await contractInstance.methods.maxSupply(id).call()
      }
    },
    nFormatter(num, digits) {
      const si = [
        {value: 1, symbol: ""},
        {value: 1E3, symbol: "k"},
        {value: 1E6, symbol: "M"},
        {value: 1E9, symbol: "G"},
        {value: 1E12, symbol: "T"},
        {value: 1E15, symbol: "P"},
        {value: 1E18, symbol: "E"}
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      let i;
      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
          break;
        }
      }
      return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
  },
  watch: {
    async "$store.state.auth.wallet"() {
      await this.loadBlockChain();
      this.fetch();
    }
  },
  created() {
    if (process.client) {
      this.loadBlockChain();
      this.fetch();
      setTimeout(() => {
        this.dataset.forEach(async data => {
          this.$set(data, 'supply', await this.getSupply(data.id))
        })
      }, 3000)
    }
  },
  computed: {
    isAuthenticated() {
      return Boolean(this.$store.state.auth.wallet) && this.$store.state.auth.wallet !== ''
    },
    isApprove() {
      return Boolean(this.allowance) && this.allowance !== "0"
    },
    isLP() {
      return this.$route.params.flag === "lp_genesis"
    }
  },
  mounted() {
  },
  beforeDestroy() {
    clearInterval()
  }
}
</script>

<style>
.goku-skeleton {
  position: relative;
  padding-top: 150%;
}

.goku-skeleton .wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@keyframes slide {
  0% {
    transform: translate(0, 0);
  }
  2% {
    transform: translate(33px, 0);
  }

  12.5% {
    transform: translate(33px, 0);
  }
  15.5% {
    transform: translate(66px, 0);
  }

  25% {
    transform: translate(66px, 0);
  }
  27% {
    transform: translate(66px, 33px);
  }

  37.5% {
    transform: translate(66px, 33px);
  }
  39.5% {
    transform: translate(33px, 33px);
  }

  50% {
    transform: translate(33px, 33px);
  }
  52% {
    transform: translate(33px, 66px);
  }

  62.5% {
    transform: translate(33px, 66px);
  }
  64.5% {
    transform: translate(0, 66px);
  }

  75% {
    transform: translate(0, 66px);
  }
  77% {
    transform: translate(0, 33px);
  }

  87.5% {
    transform: translate(0, 33px);
  }
  89.5% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

svg.loading {
  display: block;
  margin: auto;
  width: 7rem;
  height: auto;
}

svg.loading .rect {
  animation: slide 10s ease infinite;
}

svg.loading #rect1 {
  animation-delay: 0s;
}

svg.loading #rect2 {
  animation-delay: -1.5s;
}

svg.loading #rect3 {
  animation-delay: -3s;
}

svg.loading #rect4 {
  animation-delay: -4.5s;
}

svg.loading #rect5 {
  animation-delay: -6s;
}

svg.loading #rect6 {
  animation-delay: -7.5s;
}

svg.loading #rect7 {
  animation-delay: -9s;
}

.number-less {
  @apply relative;
}

.number-less .data {
  @apply absolute text-xs bottom-full left-0 px-2 py-1 border border-gray-600 bg-gray-700 opacity-0;
  transition: opacity 300ms ease-in-out;
}

.number-less:hover .data {
  zoom: 1;
  filter: alpha(opacity=50);
  opacity: 0.5;
  @apply opacity-100;
}

.number-less .data:before {
  content: '';
  width: 0;
  height: 0;
  border-top: 12px solid #4b5563;
  border-bottom: 12px solid transparent;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
  position: absolute;
  left: 10px;
  bottom: -24px;
}
.number-less .data:after{
  content: '';
  width: 0;
  height: 0;
  border-top: 10px solid #374151;
  border-bottom: 10px solid transparent;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  position: absolute;
  left: 12px;
  bottom: -20px;
}
</style>
