import Api from '../api/projects'

export default {
  namespaced: true,
  state: {
    projects: [],
    design: [],
    coding: []
  },
  mutations: {
    getAllProjects(state, payload) {
      state.projects = payload
    },
    getDesignProjects(state, payload) {
      state.design = payload
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
    getDesignProjects(context, payload) {
      return Api.getAllDesignProjects(payload).then(response => {
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
    getDesignProjects: state => {
      return state.design
    },
    getCodingProjects: state => {
      return state.coding
    }
  }
}
