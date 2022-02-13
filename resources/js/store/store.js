import Vue from 'vue'
import Vuex from 'vuex'

import projects from './projects'
import general from './general'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    projects,
    general
  }
})
