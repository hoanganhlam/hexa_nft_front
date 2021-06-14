import Vue from "vue"
import Web3 from "web3";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Chart from "@/components/Chart";
import VueLazyload from 'vue-lazyload'

Vue.component('chart', Chart)
Vue.use(VueLazyload)
Vue.mixin({
  methods: {
    setModal(state, token) {
      this.$store.commit('auth/SET_SHOW_TYPE', state)
      this.$store.commit('auth/SET_GENESIS_CONTRACT', token)
    },
    getConnection() {
      let connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", qrcodeModal: QRCodeModal
      });
      if (connector.connected) {
        return {
          connector: connector,
          connect_type: 'walletconnect'
        }
      } else if (window.ethereum) {
        return {
          connector: new Web3(window.ethereum),
          connect_type: 'metamask'
        }
      }
      return null
    },
    async checkWallet(connect) {
      let wallet = null
      if (!connect) {
        connect = this.getConnection()
      }
      if (connect) {
        switch (connect.connect_type) {
          case 'metamask':
            await connect.connector.eth.getAccounts((err, accounts) => {
              if (err) {
                throw err;
              }
              wallet = accounts.length ? accounts[0] : null
            })
            break
          case "walletconnect":
            if (connect.connector.connected) {
              wallet = connect.connector.accounts[0]
            }
        }
      }
      this.$store.commit('auth/SET_WALLET', wallet)
      return Boolean(wallet)
    },
  },
})
Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
})
