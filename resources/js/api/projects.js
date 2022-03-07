import axios from 'axios'

export default {
  async getAllProjects() {
    return axios.get(`/api/ui/projects/`)
  },
  async getProjectById(id) {
    return axios.get(`/api/ui/projects/${id}`)
  },
  async getCodingProjects() {
    return axios.get(`/api/ui/projects-coding/`)
  },
  async getDesignProjects() {
    return axios.get(`/api/ui/projects-design/`)
  },
}
