import Api from '../api/resume'

export default {
  namespaced: true,
  state: {
    experience: [],
    education: [],
    profile: null,
  },
  mutations: {
    getAllExperience(state, payload) {
      state.experience = payload
    },
    getAllEducation(state, payload) {
      state.education = payload
    },
    getProfile(state, payload) {
      state.profile = payload
    },
  },
  actions: {
    getAllExperience(context, payload) {
      return Api.getAllExperience(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.description = JSON.parse(item.description)
        })
        context.commit('getAllExperience', data)
        return data
      })
    },
    getAllEducation(context, payload) {
      return Api.getAllEducation(payload).then(response => {
        console.log(response)
        let data = response.data

        context.commit('getAllEducation', data)
        return data
      })
    },
    getProfile(context, payload) {
      return Api.getProfile(payload).then(response => {
        let data = response.data
        console.log(data)

        data.location = JSON.parse(data.location);
        data.contact = JSON.parse(data.contact);
        data.skills = JSON.parse(data.skills);
        data.strengths = JSON.parse(data.strengths);

        context.commit('getProfile', data)
        return data
      })
    }
  },
  getters: {
    getAllExperience: state => {
      return state.experience
    },
    getAllEducation: state => {
      return state.education
    },
    getProfile: state => {
      return state.profile
    },
  }
}
