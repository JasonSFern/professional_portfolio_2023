import Api from '../api/projects'

export default {
  namespaced: true,
  state: {
    projects: [],
    graphics: [],
    coding: []
  },
  mutations: {
    getAllProjects(state, payload) {
      state.projects = payload
    },
    getGraphicsProjects(state, payload) {
      state.graphics = payload
    },
    getCodingProjects(state, payload) {
      state.coding = payload
    }
  },
  actions: {
    getAllProjects(context, payload) {
      return Api.getAllProjects(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.photos = JSON.parse(item.photos)
        })
        context.commit('getAllProjects', data)
        return data
      })
    },
    getGraphicsProjects(context, payload) {
      return Api.getAllGraphicsProjects(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.photos = JSON.parse(item.photos)
        })
        context.commit('getDesignProjects', data)
        return data
      })
    },
    getCodingProjects(context, payload) {
      return Api.getAllCodingProjects(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.photos = JSON.parse(item.photos)
        })
        context.commit('getCodingProjects', data)
        return data
      })
    },
  },
  getters: {
    getAllProjects: state => {
      return state.projects
    },
    getGraphicsProjects: state => {
      return state.graphics
    },
    getCodingProjects: state => {
      return state.coding
    }
  }
}
