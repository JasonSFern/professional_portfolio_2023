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
          primary: "#17334a",
          secondary: "#0463CA",
          accent: "#d0e5fc",
          background: "#0487E2",
          gradient1: "#0487e2",
          gradient2: "#0c8be3",
          gradient3: "#1590e4",
          gradient4: "#1d94e4",
          gradient5: "#2598e5",
          gradient6: "#2b9ce6",
          gradient7: "#309fe8",
          gradient8: "#36a3e9",
          gradient9: "#3ba6ec",
          gradient10: "#3faaef",
          gradient11: "#44adf2",
          gradient12: "#48b1f5",
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