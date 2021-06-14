<template>
  <div>
    <section id="s4" class="py-48 h-full border-b md:border-b-0 dark:border-gray-700">
      <div class="container px-6 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div class="mb-16 md:mb-0 text-center md:text-left">
          <span class="text-red-600 font-bold uppercase">Genesis collections</span>
          <h2 class="text-6xl font-medium mt-4 mb-8">{{ s4.title }}</h2>
          <p class="text-gray-300 mb-12">{{ s4.desc }}</p>
          <div class="btn-primary justify-center w-full md:w-auto sm" @click="handleConnect()">
            <icon :name="isAuthenticated ? 'wallet': 'lock'"></icon>
            <div>{{ isAuthenticated ? '' : 'Unlock ' }}Wallet</div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div class="cursor-pointer">
              <video muted loop autoplay playsinline :id="`video_0`" class="rounded-tl rounded-tr" @mouseover="videoHover(0, true)" @mouseleave="videoHover(0, false)">
                <source src="/genesis.mp4">
              </video>
              <div class="p-4 flex justify-center">
                <n-link to="/characters/genesis" class="btn-secondary sm">Genesis</n-link>
              </div>
            </div>
            <div class="cursor-pointer">
              <video muted loop autoplay playsinline :id="`video_1`" class="rounded-tl rounded-tr" @mouseover="videoHover(1, true)" @mouseleave="videoHover(1, false)">
                <source src="/genesis_lp.mp4">
              </video>
              <div class="p-4 flex justify-center">
                <n-link to="/characters/lp_genesis" class="btn-secondary sm">Genesis LP</n-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SVGIcon from "~/components/Icon.vue";

export default {
  components: {icon: SVGIcon},
  name: "PageIndex",
  data() {
    return {
      s4: {
        title: "Featured Genesis",
        desc: "Collectibles of Goku cards with the uniqueness of each character.",
        arr: []
      },
    }
  },
  methods: {
    handleConnect() {
      if (this.isAuthenticated) {
        this.setModal('show_wallet', null)
      } else {
        this.setModal('connect', null)
      }
    }
  },
  computed: {
    isAuthenticated() {
      return Boolean(this.$store.state.auth.wallet) && this.$store.state.auth.wallet !== ''
    },
  }
}
</script>

<style>
</style>
