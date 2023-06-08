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
          secondary: "#cfe9fa",
          accent: "#addfff",
          background: "#7aadd1",
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
          accent: "#00abff",
          background: "#003a6c",
          gradient1: "#0161a4",
          gradient2: "#085697",
          gradient3: "#0c4c8a",
          gradient4: "#0e427e",
          gradient5: "#0e3871",
          gradient6: "#0c3368",
          gradient7: "#092d5f",
          gradient8: "#072856",
          gradient9: "#06264e",
          gradient10: "#072346",
          gradient11: "#08213e",
          gradient12: "#0a1e36",
          success: "#68c929",
          info: "#face33",
          warning: "#f09333",
          danger: "#cc362b",
        }
      }
    },
})