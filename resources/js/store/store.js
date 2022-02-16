import Vue from 'vue'
import Vuex from 'vuex'

import projects from './projects'
import general from './general'
import experience from './experience'
import skills from './skills'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    projects,
    general,
    experience,
    skills
  }
})
