import axios from 'axios'

export default {
  async getAllSkills() {
    return axios.get(`/api/ui/skills/`)
  },
  async getSkillById(id) {
    return axios.get(`/api/ui/skills/${id}`)
  },
  async getCodingSkills() {
    return axios.get(`/api/ui/skills-coding/`)
  },
  async getDesignSkills() {
    return axios.get(`/api/ui/skills-design/`)
  },
}
