<template>
  <div id="site-main" class="dark flex flex-col">
    <header id="header" class="dark:text-white fixed top-0 left-0 right-0 z-50">
      <nav ref="nav-main" class="nav-main">
        <div class="flex items-center justify-between container mx-auto font-bold">
          <div class="flex items-center -mx-2">
            <div class="mx-2 p-2 items-center flex space-x-4">
              <h1 class="cursor-pointer text-lg font-bold">
                <n-link to="/">
                  <img class="h-8 md:h-10" src="/step_hero_logo.png" alt="Step hero">
                </n-link>
              </h1>
              <div class="dropdown relative" :class="{'active': activeDrop}" v-click-outside="closeDrop">
<!--                <div class="flex cursor-pointer items-center space-x-1" @click="activeDrop = !activeDrop">-->
<!--                  <span>{{coinSystem}}</span>-->
<!--                  <icon name="down"></icon>-->
<!--                </div>-->
                <div class="pt-2 absolute">
                  <div class="py-1 border border-gray-600 rounded w-48 top-full bg-gray-700">
                    <a href="/" class="w-full flex space-x-2 p-4 py-2 cursor-pointer border-b border-gray-600">
                      <img class="h-6 object-cover" src="/binance.png" alt="">
                      <span>Binance</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:block mx-2 w-0.5 rounded h-10 bg-gray-500"></div>
            <n-link to="/battle" class="hidden md:block cursor-pointer mx-2 p-3">
              <span class="hidden md:block">Battle</span>
            </n-link>
            <a href="https://market.stephero.io" class="hidden md:block cursor-pointer mx-2 p-3">
              <span class="hidden md:block">Marketplace</span>
            </a>
            <dropdown hoverable class="hidden md:block mx-2 p-3">
              <a href="">Collection</a>
              <div class="drop-body" slot="body">
                <n-link to="/characters/genesis" class="hidden md:block cursor-pointer mx-2 p-3">
                  <span class="hidden md:block">Heroes</span>
                </n-link>
                <n-link to="/characters/lp_genesis" class="hidden md:block cursor-pointer mx-2 p-3">
                  <span class="hidden md:block">Heroes LP</span>
                </n-link>
              </div>
            </dropdown>
            <n-link to="/token" class="hidden md:block cursor-pointer mx-2 p-3">
              <span class="hidden md:block">Token</span>
            </n-link>
            <a href="https://whitepaper.stephero.io/" class="hidden md:block cursor-pointer mx-2 p-3">
              <span class="hidden md:block">Whitepaper</span>
            </a>
            <a v-if="false" href="https://whitepaper.stephero.io/" class="hidden md:block cursor-pointer mx-2 p-3">
              <span class="hidden md:block">My Collection</span>
            </a>
          </div>
          <div class="flex items-center">
            <div class="md:mx-2 py-3 md:px-3 flex space-x-1 text-gray-400">
              <icon class="active" v-if="isAuthenticated" name="circle-active"></icon>
              <icon v-else name="circle"></icon>
              <span class="hidden md:block text-sm">{{ isAuthenticated ? 'Connected wallet' : 'No wallet' }}</span>
            </div>
            <div class="hidden md:block">
              <div class="mx-2 btn-secondary sm" @click="handleConnect()">
                <icon :name="isAuthenticated ? 'wallet': 'lock'"></icon>
                <div class="hidden md:block">{{ isAuthenticated ? '' : 'Unlock ' }}Wallet</div>
              </div>
            </div>
            <div class="mx-2 p-3 md:hidden cursor-pointer" @click="showMenu = !showMenu">
              <icon class="md" fill="#777E91" name="menu"></icon>
            </div>
          </div>
        </div>
      </nav>
      <transition name="slide-up">
        <div v-show="showMenu" class="p-6 bg-gray-800 fixed top-0 left-0 right-0 font-bold">
          <h4 class="text-center mb-4 uppercase">Menu</h4>
          <div class="mb-4">
            <n-link to="/battle" class="btn-secondary justify-center">Battle</n-link>
          </div>
          <div class="mb-4">
            <a href="https://market.stephero.io" class="btn-secondary justify-center">Marketplace</a>
          </div>
          <div class="mb-4">
            <n-link to="/characters/genesis" class="btn-secondary justify-center">Heroes</n-link>
          </div>
          <div class="mb-4">
            <n-link to="/characters/lp_genesis" class="btn-secondary justify-center">Heroes LP</n-link>
          </div>
          <div class="mb-4">
            <n-link to="/token" class="btn-secondary justify-center">Token</n-link>
          </div>
          <div class="mb-4">
            <a href="https://whitepaper.stephero.io/" class="btn-secondary justify-center">Whitepaper</a>
          </div>
          <div v-if="false" class="mb-4">
            <n-link to="/collection" class="btn-secondary justify-center">My Collection</n-link>
          </div>
          <div class="mb-4">
            <div class="btn-primary justify-center w-full sm" @click="handleConnect()">
              <icon :name="isAuthenticated ? 'wallet': 'lock'"></icon>
              <div>{{ isAuthenticated ? '' : 'Unlock ' }}Wallet</div>
            </div>
          </div>
          <div class="cursor-pointer flex justify-center items-center space-x-2 p-4" @click="showMenu = false">
            <icon name="x" class="md"></icon>
            <span>Close</span>
          </div>
        </div>
      </transition>
    </header>
    <main class="flex-1 dark:text-white dark:bg-gray-900">
      <Nuxt/>
    </main>
    <page-footer />
    <client-only>
      <connect-wallet/>
    </client-only>
    <client-only>
      <div v-if="ns.length" class="notification">
        <div v-for="(n, index) in ns" :key="index" class="item">
          <span class="text-sm">{{ n.msg }}</span>
          <icon class="cursor-pointer px-1 hover:bg-green-700" fill="#EEE" name="x"
                @click.native="$store.commit('config/REMOVE_NOTIFY', index)"/>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script>
import SVGIcon from "~/components/Icon.vue";
import ConnectWallet from "@/components/ConnectWallet.vue";
import Dropdown from "@/components/Dropdown";
import PageFooter from "@/components/PageFooter";

export default {
  components: {Dropdown, ConnectWallet, PageFooter, icon: SVGIcon},
  data() {
    return {
      showMenu: false,
      activeDrop: false,
      coinSystem: process.env.COIN_SYSTEM
    }
  },
  head() {
    return {
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,500&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap'
      }],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/chart.js"
        }
      ]
    }
  },
  mounted() {
    this.checkWallet(null);
    let check = false;
    let checkConnection = false;
    setInterval(() => {
        if (this.ns.length && !check) {
          check = true
          setTimeout(
            function () {
              this.$store.commit('auth/REMOVE_NOTIFY', this.ns.length - 1)
              check = false
            }.bind(this),
            1000
          )
        }
      },
      3000
    )
    // setInterval(async () => {
    //     if (!checkConnection) {
    //       checkConnection = await this.checkWallet()
    //     }
    //   },
    //   3000
    // )
  },
  methods: {
    handleConnect() {
      if (this.isAuthenticated) {
        this.setModal('show_wallet', null)
      } else {
        this.setModal('connect', null)
      }
    },
    closeDrop() {
      this.activeDrop = false
    }
  },
  computed: {
    isAuthenticated() {
      return Boolean(this.$store.state.auth.wallet) && this.$store.state.auth.wallet !== ''
    },
    ns() {
      return this.$store.state.auth.ns
    },
  },
  watch: {
    "$route"() {
      this.showMenu = false
    }
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Poppins', sans-serif;
}

h1,h2,h3,h4 {
  font-family: 'DM Sans', sans-serif;

}

.container {
  max-width: 1120px !important;
}

.container.sm {
  max-width: 928px !important;
}

.container.xs {
  max-width: 736px !important;
}

header {
  font-size: 15px;
}

header.sticking {
  @apply border-b border-gray-700 shadow-sm sticky z-50 top-0;
  animation: slide-down 0.35s;
}

header.sticking .notify {
  display: none;
}

#site-main {
  min-height: 100vh;
  overflow: hidden;
}

.dark svg {
  fill: white;
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0);
  }
}

.active svg {
  fill: green;
}

.btn-connect {
  @apply rounded cursor-pointer m-2 p-2 px-4 bg-red-700 hover:text-white font-bold flex space-x-1 dark:border-gray-700;
}

.nav-mobile {
  @apply md:hidden flex bg-gray-900 bg-opacity-70 border-t border-gray-700 text-center;
}

.notification {
  @apply fixed bottom-14 right-4;
  z-index: 999;
}

.notification .item {
  @apply w-full md:w-80 p-2 pl-4 rounded bg-green-500 text-white flex justify-between shadow;
  animation-duration: 0.25s;
  animation-name: slidein;
}

.notification .item:not(:last-child) {
  @apply mb-2;
}

@keyframes slidein {
  from {
    transform: translate(0, -1rem);
  }

  to {
    transform: translate(0, 0);
  }
}

.slide-up-enter-active {
  animation: slidein 0.25s;
}

.slide-up-leave-active {
  animation: slidein 0.25s reverse;
}

.fade-enter-active {
  transition: opacity 0.2s;
}

.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav-main {
  @apply bg-white dark:bg-opacity-80 dark:bg-gray-900;
}

.nav-main a {
  color: #777E90;
}

.nav-main a:hover,
.nav-main a.active {
  color: #FFF;
}

.btn-primary {
  @apply rounded-full text-white p-3 py-2 md:p-6 md:py-3.5 cursor-pointer inline-flex space-x-2;
  background: #F36237;
}

.btn-secondary {
  @apply border-2 rounded-full p-3 py-2 md:p-6 md:py-3.5 cursor-pointer flex space-x-2;
}

.btn-secondary.sm {
  @apply py-2.5 px-7;
}

.text-red-600 {
  color: #F36237;
}

.dropdown .absolute {
  display: none;
}

.dropdown.active .absolute,
.dropdown:hover .absolute {
  display: block;
}
</style>
