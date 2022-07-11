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
          secondary: "#face33",
          accent: "#202F61",
          background: "#EFEFF4",
          gradient1: "#859feb",
          gradient2: "#6998e9",
          gradient3: "#4e6dc1",
          success: "#68c929",
          info: "#face33",
          warning: "#f09333",
          danger: "#cc362b",
        },
        dark: {
          primary: "#ffffff",
          secondary: "#face33",
          accent: "#3096f3",
          background: "#1E3C96",
          gradient1: "#1E2696",
          gradient2: "#1E3C96",
          gradient3: "#123560",
          success: "#68c929",
          info: "#face33",
          warning: "#f09333",
          danger: "#cc362b",
        }
      }
    },
})