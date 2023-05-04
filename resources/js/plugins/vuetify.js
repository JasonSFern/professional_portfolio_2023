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
          gradient2: "#809eeb",
          gradient3: "#7b9ceb",
          gradient4: "#769bea",
          gradient5: "#719aea",
          gradient6: "#6c96e6",
          gradient7: "#6791e3",
          gradient8: "#628ddf",
          gradient9: "#5d85d8",
          gradient10: "#587dd0",
          gradient11: "#5375c9",
          gradient12: "#4e6dc1",
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
          gradient1: "#0587e1",
          gradient2: "#0a79d3",
          gradient3: "#106ac6",
          gradient4: "#165cb7",
          gradient5: "#1a4ea9",
          gradient6: "#17489e",
          gradient7: "#144194",
          gradient8: "#113b89",
          gradient9: "#0b3a7f",
          gradient10: "#0a3975",
          gradient11: "#0d376b",
          gradient12: "#123560",
          success: "#68c929",
          info: "#face33",
          warning: "#f09333",
          danger: "#cc362b",
        }
      }
    },
})