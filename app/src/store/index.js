/** VUEX store definition **/

import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/store/modules'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    ...modules
  },
  strict: false
})
