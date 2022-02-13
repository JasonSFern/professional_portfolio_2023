import axios from 'axios'

export default {
  async getAllClassifications() {
    return axios.get(`/api/ui/general/classifications`)
  },
}
