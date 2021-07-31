require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    rpcURL: process.env.rpcURL || "https://data-seed-prebsc-1-s1.binance.org:8545/",
    CONTRACT_LP_GENESIS: process.env.CONTRACT_LP_GENESIS || "0x4Cc21Da49CeEa44082E709A1F27687CB3Dfb4A53",
    CONTRACT_GENESIS: process.env.CONTRACT_GENESIS || "0xa7101F36F7b503a1405072FDDCaF7CdD8CF682E7",
    CONTRACT_TOKEN: process.env.CONTRACT_TOKEN || "0xF9F8E271CC46a940af55989787D58C70937944e8",
    CONTRACT_TOKEN_1155: process.env.CONTRACT_TOKEN_1155 || "0x484F22199D315F63F2C12a312f7dd8DC9C5ba524",
    COIN_SYSTEM: process.env.COIN_SYSTEM || "Binance"
  },
  head: {
    title: 'HERO NFTs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/client.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_DOMAIN || "https://api.stephero.io",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  'google-gtag': {
    id: 'G-YGT5C3Z1SP'
  }
}
