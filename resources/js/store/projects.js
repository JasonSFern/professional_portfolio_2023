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
          item.contents = JSON.parse(item.contents)
          item.photos = JSON.parse(item.photos)
          item.skills = JSON.parse(item.skills)
          item.links = JSON.parse(item.links)
        })
        context.commit('getAllProjects', data)
        return data
      })
    },
    getDesignProjects(context, payload) {
      return Api.getDesignProjects(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.contents = JSON.parse(item.contents)
          item.photos = JSON.parse(item.photos)
          item.skills = JSON.parse(item.skills)
          item.links = JSON.parse(item.links)
        })
        context.commit('getDesignProjects', data)
        return data
      })
    },
    getCodingProjects(context, payload) {
      return Api.getCodingProjects(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.contents = JSON.parse(item.contents)
          item.photos = JSON.parse(item.photos)
          item.skills = JSON.parse(item.skills)
          item.links = JSON.parse(item.links)
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
