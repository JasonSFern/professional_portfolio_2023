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
