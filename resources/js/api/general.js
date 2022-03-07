import axios from 'axios'

export default {
  async getAllClassifications() {
    return axios.get(`/api/ui/general/classifications`)
  },
  async storeContactForm(payload) {
    return axios.post(`/api/ui/general/email`, payload)
  },
}
