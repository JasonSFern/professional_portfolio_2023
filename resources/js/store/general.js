import Api from '../api/general'

export default {
  namespaced: true,
  state: {
    classifications: []
  },
  mutations: {
    getAllClassifications(state, payload) {
      state.classifications = payload
    },
  },
  actions: {
    getAllClassifications(context, payload) {
      return Api.getAllClassifications(payload).then(response => {
        let data = response.data
        
        var obj = {}
        obj.id = 0
        obj.name = 'All'
        data.unshift(obj)

        context.commit('getAllClassifications', data)
        return data
      })
    },
  },
  getters: {
    getAllClassifications: state => {
      return state.classifications
    },
  }
}
