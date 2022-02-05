import axios from 'axios'

export default {
  async getAllGraphicsProjects() {
    return axios.get(`/api/ui/projects/graphics/`)
  },
  async getAllCodingProjects() {
    return axios.get(`/api/ui/projects/coding/`)
  }
}
