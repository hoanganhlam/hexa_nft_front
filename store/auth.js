export default {
  namespaced: true,
  state: () => ({
    ns: [],
    show_type: false,
    currentContract: null,
    connector: null,
    content_type: null,
    wallet: null,
  }),
  mutations: {
    ['SET_WALLET'](state, payload) {
      state.wallet = payload;
    },
    ['SET_SHOW_TYPE'](state, payload) {
      state.show_type = payload;
    },
    ['SET_GENESIS_CONTRACT'](state, payload) {
      state.currentContract = payload;
    },
    ['SET_CONNECTOR'](state, payload) {
      state.connector = payload;
    },
    ['SET_CONNECT_TYPE'](state, payload) {
      state.content_type = payload;
    },
    ['NOTIFY'](state, ct) {
      state.ns.unshift({
        ...(typeof ct === 'string'
          ? {
            msg: ct,
            timeout: 3,
          }
          : ct),
      })
    },
    ['REMOVE_NOTIFY'](state, index) {
      state.ns.splice(index, 1)
    },
  }
}
