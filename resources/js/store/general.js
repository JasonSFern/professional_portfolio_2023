import Api from '../api/general'

export default {
  namespaced: true,
  state: {
    classifications: [],
  },
  mutations: {
    getClassifications(state, payload) {
      state.classifications = payload
    },
  },
  actions: {
    getClassifications(context, payload) {
      return Api.getClassifications(payload).then(response => {
        let data = response.data
        
        var obj = {}
        obj.id = 0
        obj.name = 'All'
        obj.type = 'project'
        data.unshift(obj)

        context.commit('getClassifications', data)
        return data
      })
    },
  },
  getters: {
    getClassifications: state => {
      return state.classifications
    },
  }
}
