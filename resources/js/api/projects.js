import axios from 'axios'

export default {
  async getAllGraphicsProjects() {
    return axios.get(`/api/ui/projects/graphics/`)
  },
  async getGraphicProjectById(id) {
    return axios.get(`/api/ui/projects/graphics/${id}`)
  },
  async getAllCodingProjects() {
    return axios.get(`/api/ui/projects/coding/`)
  },
  async getCodingProjectById(id) {
    return axios.get(`/api/ui/projects/coding/${id}`)
  },
}
