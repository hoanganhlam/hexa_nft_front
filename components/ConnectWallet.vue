<template>
  <transition name="fade">
    <div v-show="showing" class="modal">
      <div class="mx-auto w-full md:w-1/3 md:mt-24 flex flex-col justify-end md:justify-start h-full">
        <div class="mb-2 flex justify-end">
          <div class="cursor-pointer ml-auto rounded-full bg-gray-700 p-2.5 inline-flex" @click="closeDrop">
            <icon name="x"></icon>
          </div>
        </div>
        <div class="modal-content">
          <div v-if="isAuthenticated">
            <div v-if="$store.state.auth.show_type === 'show_wallet'">
              <div>{{ $store.state.auth.wallet }}</div>
<!--              <div class="text-center cursor-pointer p-2.5 border-b" @click="removeWallet">Exit</div>-->
            </div>
            <div v-else-if="contractToken">
              <h4 class="mb-4 font-bold">Deposit $GOKU, Earn ball, mint NFTs</h4>
              <p class="mb-4 font-normal">Staking GOKU tokens in the Genesis pool earns you roughly 1 credit per day, With
                enough ball, you can mint an exclusive limited-edition NFT goku. Supply and balls required differ across
                NFTs</p>
              <div class="mb-4 flex -mx-1.5">
                <div class="px-1.5 flex-1" :class="{'animate-pulse': loading.stake}">
                  <div class="flex border rounded-sm">
                    <label class="flex-1">
                      <input min="0" placeholder="Number of tokens..." v-model="unit" :disabled="loading.stake"
                             class="w-full p-1.5 w-20 shadow shadow-inner" type="number">
                    </label>
                    <span class="p-1.5 bg-gray-50">Max</span>
                  </div>
                </div>
                <div class="px-1.5">
                  <div class="cursor-pointer p-1.5 px-4 border shadow rounded-sm" :class="{'bg-gray-100': loading.stake}" @click="stake(true)">Stake</div>
                </div>
                <div class="px-1.5">
                  <div class="cursor-pointer p-1.5 px-4 border shadow rounded-sm" :class="{'bg-gray-100': loading.stake}" @click="stake(false)">Unstake</div>
                </div>
              </div>
              <a target="_blank" href="https://testnet.bscscan.com/address/0xf9f8e271cc46a940af55989787d58c70937944e8">
                <span>View contract on Etherscan</span>
              </a>
            </div>
          </div>
          <div v-else>
            <h4 class="mb-4 font-bold">Connect to a wallet</h4>
            <div v-if="hasMetaMask()" class="wallet-btn hidden md:block" :class="{'animate-pulse': loading.metaMask}" @click="authenticate('metamask')">
              <span>Metamask</span>
              <img class="w-8" src="/metamask.png" alt="">
            </div>
            <a v-else href="https://metamask.io/download.html" target="_blank" class="wallet-btn hidden md:block">
              <span>Install Metamask</span>
              <img class="w-8" src="/metamask.png" alt="">
            </a>
            <div class="wallet-btn" @click="authenticate('walletconnect')">
              <span>WalletConnect</span>
              <img class="w-8" src="/walletconnect.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import WalletConnect from "@walletconnect/client";
import Web3 from "web3";
import SVGIcon from "@/components/Icon.vue";
import {ABI_GENESIS} from "@/plugins/abi";
import QRCodeModal from "@walletconnect/qrcode-modal";
import KardiaClient from 'kardia-js-sdk';
const rpcURL = process.env.rpcURL

export default {
  name: "ConnectWallet",
  components: {icon: SVGIcon},
  data() {
    return {
      loading: {
        metaMask: false,
        connectWallet: false,
        stake: false
      },
      unit: 1,
    };
  },
  methods: {
    hasMetaMask() {
      return process.client && Boolean(window.ethereum)
    },
    closeDrop() {
      if (this.showing) {
        this.setModal(null, null)
      }
    },
    /* BLOCKCHAIN AUTHENTICATION */
    async authenticate(transport) {
      let connector = null
      switch (transport) {
        case 'metamask':
          this.$store.commit('auth/SET_CONNECT_TYPE', 'matamask')
          this.loading.metaMask = true;
          if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            connector = window.web3
          }
          this.loading.metaMask = false;
          break
        case 'walletconnect':
          this.loading.connectWallet = true;
          this.$store.commit('auth/SET_CONNECT_TYPE', 'walletconnect')
          connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", qrcodeModal: QRCodeModal
          });
          if (!connector.connected) {
            await connector.createSession();
          }
          this.loading.connectWallet = false;
          break;
      }
      this.setModal(null, null)
    },
    /* BLOCKCHAIN STAKE */
    async stake(flag) {
      if (this.isAuthenticated && this.contractToken) {
        const wallet = this.$store.state.auth.wallet
        const gasLimit = 400000;
        const gasPrice = 20000000000;
        const w3 = new Web3(rpcURL)
        const contractInstance = new w3.eth.Contract(ABI_GENESIS, this.contractToken);
        let data = null;
        if (flag) {
          data = contractInstance.methods.stake(w3.utils.toWei(this.unit.toString(16))).encodeABI();
        } else {
          data = contractInstance.methods.withdraw(this.unit).encodeABI();
        }
        if (data) {
          const nonce = await w3.eth.getTransactionCount(wallet, 'pending');
          const transaction = {
            from: wallet,
            to: this.contractToken,
            value: 0,
            data,
            nonce: nonce.toString(16),
            gas: gasLimit.toString(16),
            gasPrice: gasPrice.toString(16)
          };
          const connect = this.getConnection()
          if (connect) {
            this.loading.stake = true;
            if (connect.connect_type === 'metamask') {
              await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transaction],
              }).then(() => {
                this.$store.commit('auth/NOTIFY', flag ? 'Staked': 'Unstaked')
              }).catch(e => {
                console.log(e);
              })
            } else if (connect.connect_type === 'walletconnect') {
              await connect.connector.sendTransaction(transaction).then(() => {
                this.$store.commit('auth/NOTIFY', flag ? 'Staked': 'Unstaked')
              }).catch(e => {
                console.log(e);
              })
            }
            this.loading.stake = false;
          }
        }
      }
    },
    removeWallet() {
      const connect = this.getConnection()
      if (connect) {
        if (connect.connect_type === 'walletconnect') {
          connect.connector.killSession()
        }
      }
    }
  },
  computed: {
    isAuthenticated() {
      return Boolean(this.$store.state.auth.wallet) && this.$store.state.auth.wallet !== ''
    },
    contractToken() {
      return this.$store.state.auth.currentContract
    },
    showing() {
      return Boolean(this.$store.state.auth.show_type)
    }
  },
  watch: {
    showing() {
      document.body.style.overflow = this.showing ? 'hidden' : 'unset';
    }
  },
  // mounted() {
  //   const kardiaClient = new KardiaClient({ endpoint: process.env.rpcURL });
  // }
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(79, 75, 75, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(7.5px);
  z-index: 999;
  height: 100vh;
  overflow: hidden;
}

.modal-content {
  @apply bg-white p-6 pb-24 md:pb-6 rounded-bl-none rounded-br-none rounded-tl-2xl rounded-tr-2xl text-black md:rounded-bl-2xl md:rounded-br-2xl;
}

.wallet-btn {
  @apply mb-4 border rounded-lg px-4 py-2.5 cursor-pointer hover:border-gray-400 flex justify-between items-center;
}
</style>
