import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
    confont: 'mdi',
    theme: {
      dark: true,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: "#2A3556",
          secondary: "#6c97be",
          accent: "#202F61",
          background: "#EFEFF4",
          gradient1: "#D3D3E2",
          gradient2: "#F0F0F0",
          gradient3: "#E8F0FE"
        },
        dark: {
          primary: "#ffffff",
          secondary: "#face33",
          accent: "#3096f3",
          background: "#1E3C96",
          gradient1: "#1E2696",
          gradient2: "#1E3C96",
          gradient3: "#123560"
        }
      }
    },
})