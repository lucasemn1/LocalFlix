import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/styles/global.css';
import '@/styles/layout.css';
import '@/styles/inputs.css';
import '@/styles/buttons.css';

// if(screen.width > 768) {
//   store.commit('changeSidenavVisible');
//   console.log(store.state.showSidenav)
// }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
