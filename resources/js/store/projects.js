import Api from '../api/projects'

export default {
  namespaced: true,
  state: {
    graphics: [],
    coding: []
  },
  mutations: {
    getAllGraphicsProjects(state, payload) {
      state.graphics = payload
    },
    getAllCodingProjects(state, payload) {
      state.coding = payload
    }
  },
  actions: {
    async getAllGraphicsProjects(context, payload) {
      return Api.getAllGraphicsProjects(payload).then(response => {
        let data = response.data
        console.log(data)
        context.commit('getAllGraphicsProjects', data)
        return data
      })
    },
    getAllCodingProjects(context, payload) {
      return Api.getAllCodingProjects(payload).then(response => {
        let data = response.data
        context.commit('getAllCodingProjects', data)
        return data
      })
    },
  },
  getters: {
    getAllGraphicsProjects: state => {
      return state.graphics
    },
    getAllCodingProjects: state => {
      return state.coding
    }
  }
}
