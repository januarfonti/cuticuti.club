import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { sync } from 'vuex-router-sync'
import VueMeta from 'vue-meta'
// import router from './router'
// import store from './store'
import ApiService from './services/api.service'
import TokenService from './services/storage.service'
import filters from './filters'

import '@/plugins/veevalidate'
import '@/plugins/common'
// import '@/plugins/axios'
import i18n from '@/plugins/i18n'
import router from '@/router'
import { store } from '@/store'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

// Global filters
Vue.use(filters)

Vue.use(BootstrapVue)

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

// Sync vue-router's current $route as part of vuex store's state.
sync(store, router)

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
  created() {
    store.dispatch('setLocale', store.getters.locale)
    // if (store.getters.isTokenSet) {
    //   store.dispatch('autoLogin')
    // }
  }
}).$mount('#app')
