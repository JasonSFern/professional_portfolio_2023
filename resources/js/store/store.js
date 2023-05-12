import Vue from 'vue'
import Vuex from 'vuex'

import projects from './projects'
import general from './general'
import resume from './resume'
import skills from './skills'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    projects,
    general,
    resume,
    skills
  }
})
