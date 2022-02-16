import axios from 'axios'

export default {
  async getAllExperience() {
    return axios.get(`/api/ui/experience/`)
  },
  async getExperienceById(id) {
    return axios.get(`/api/ui/experience/${id}`)
  },
  async getAllWorkExperience() {
    return axios.get(`/api/ui/experience/work/`)
  },
  async getAllEducationExperience() {
    return axios.get(`/api/ui/experience/education/`)
  },
  async getAllVolunteerExperience() {
    return axios.get(`/api/ui/experience/volunteer/`)
  },
}
