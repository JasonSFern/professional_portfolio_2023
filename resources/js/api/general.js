import axios from 'axios'

export default {
  async getClassifications() {
    return axios.get(`/api/ui/general/classifications`)
  },
  async storeContactForm(payload) {
    return axios.post(`/api/ui/general/email`, payload)
  },
}
