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
          // accent: "#47ade2",
          background: "#1E3C96",
          gradient1: "#1E2696",
          gradient2: "#1E3C96",
          gradient3: "#123560"
        },
        royalty: {
          primary: "#ffffff",
          secondary: "#251749",
          accent: "#4e2475",
          background: "#1E3C96",
          gradient1: "#c847b0",
          gradient2: "#9240bc",
          gradient3: "#6f3ec5"
        },
        rust: {
          primary: "#2b0a0a",
          secondary: "#153f54",
          accent: "#dca235",
          background: "#1E3C96",
          gradient1: "#833255",
          gradient2: "#68292A",
          gradient3: "#3B0F10"
        },
        industrial: {
          primary: "#d3d9e4",
          secondary: "#f09333",
          accent: "#eb5933",
          background: "#1E3C96",
          gradient1: "#4a5260",
          gradient2: "#5c6470",
          gradient3: "#4a5260"
        },
        olive: {
          primary: "#ffffff",
          secondary: "#674F91",
          accent: "#661141",
          background: "#1E3C96",
          gradient1: "#787E15",
          gradient2: "#A1A838",
          gradient3: "#4F5400"
        },
        nature: {
          primary: "#FFFFFF",
          secondary: "#90caf9",
          accent: "#face33",
          background: "#4197CE",
          gradient1: "#4197CE",
          gradient2: "#4B8340",
          gradient3: "#135634"
        },
        sky: {
          primary: "#FFFFFF",
          secondary: "#0453A8",
          accent: "0463CA",
          background: "#1E3C96",
          gradient1: "#0487E2",
          gradient2: "#65C2F5",
          gradient3: "#B0D6F5",
        },
        slate: {
          primary: "#ffffff",
          secondary: "#bdbdbd",
          accent: "#cc362b",
          background: "#1E3C96",
          gradient1: "#16181d",
          gradient2: "#212224",
          gradient3: "#434343"
        },
      }
    },
})