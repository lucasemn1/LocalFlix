import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSidenav: false,
  },
  mutations: {
    changeSidenavVisible(state) {
      state.showSidenav = !state.showSidenav;
    },
  },
  actions: {
  },
  modules: {
  }
})
