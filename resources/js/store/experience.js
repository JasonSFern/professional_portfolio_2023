import Api from '../api/experience'

export default {
  namespaced: true,
  state: {
    experience: [],
    work: [],
    education: [],
    volunteer: []
  },
  mutations: {
    getAllExperience(state, payload) {
      state.experience = payload
    },
    getAllWorkExperience(state, payload) {
      state.work = payload
    },
    getAllEducationExperience(state, payload) {
      state.education = payload
    },
    getAllVolunteerExperience(state, payload) {
      state.volunteer = payload
    }
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
    getAllWorkExperience(context, payload) {
      return Api.getAllWorkExperience(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.description = JSON.parse(item.description)
        })
        context.commit('getAllWorkExperience', data)
        return data
      })
    },
    getAllEducationExperience(context, payload) {
      return Api.getAllEducationExperience(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.description = JSON.parse(item.description)
        })
        context.commit('getAllEducationExperience', data)
        return data
      })
    },
    getAllVolunteerExperience(context, payload) {
      return Api.getAllVolunteerExperience(payload).then(response => {
        let data = response.data
        data.forEach(function (item) {
          item.description = JSON.parse(item.description)
        })
        context.commit('getAllVolunteerExperience', data)
        return data
      })
    }
  },
  getters: {
    getAllExperience: state => {
      return state.experience
    },
    getAllWorkExperience: state => {
      return state.work
    },
    getAllEducationExperience: state => {
      return state.education
    },
    getAllVolunteerExperience: state => {
      return state.volunteer
    }
  }
}
