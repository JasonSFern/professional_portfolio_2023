import Api from '../api/skills'

export default {
  namespaced: true,
  state: {
    skills: [],
    design: [],
    coding: []
  },
  mutations: {
    getAllSkills(state, payload) {
      state.skills = payload
    },
    getDesignSkills(state, payload) {
      state.design = payload
    },
    getCodingSkills(state, payload) {
      state.coding = payload
    }
  },
  actions: {
    getAllSkills(context, payload) {
      return Api.getAllSkills(payload).then(response => {
        let data = response.data
        context.commit('getAllSkills', data)
        return data
      })
    },
    getDesignSkills(context, payload) {
      return Api.getAllDesignSkills(payload).then(response => {
        let data = response.data
        context.commit('getDesignSkills', data)
        return data
      })
    },
    getCodingSkills(context, payload) {
      return Api.getAllCodingSkills(payload).then(response => {
        let data = response.data
        context.commit('getCodingSkills', data)
        return data
      })
    },
  },
  getters: {
    getAllSkills: state => {
      return state.skills
    },
    getDesignSkills: state => {
      return state.design
    },
    getCodingSkills: state => {
      return state.coding
    }
  }
}
