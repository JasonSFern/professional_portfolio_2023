import axios from 'axios'

export default {
  async getAllExperience() {
    return axios.get(`/api/ui/experience/`)
  },
  async getExperienceById(id) {
    return axios.get(`/api/ui/experience/${id}`)
  },
  async getWorkExperience() {
    return axios.get(`/api/ui/experience-work/`)
  },
  async getVolunteerExperience() {
    return axios.get(`/api/ui/experience-volunteer/`)
  },
  async getAllEducation() {
    return axios.get(`/api/ui/education/`)
  },
  async getEducationById(id) {
    return axios.get(`/api/ui/education/${id}`)
  },
  async getDegreeEducation() {
    return axios.get(`/api/ui/education-degree/`)
  },
  async getCertificateEducation() {
    return axios.get(`/api/ui/education-certificate/`)
  },
  async getProfile() {
    return axios.get(`/api/ui/general/profile/`)
  },
}
