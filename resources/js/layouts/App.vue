<template>
  <v-app class="gradient-color-bg" :dark="goDark">
    <header-bar :goDark="goDark" @darkMode="darkMode($event)"/>

    <transition-page>
      <router-view/>
    </transition-page>

    <footer-bar/>
  </v-app>
</template>

<script>
import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";
import TransitionPage from '../transitions/TransitionPage';
import CustomThemes from '../plugins/custom_themes';

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
    TransitionPage
  },
  data() {
    return {
      goDark: false
    };
  },
  watch:{
    $route (to, from){
      console.log(to)
      if (to.name !== 'projects' && to.name !== 'viewproject') {
        let selectedTheme = CustomThemes['default']
        let dark = selectedTheme.dark;
        let light = selectedTheme.light

        Object.keys(dark).forEach(i => {
          this.$vuetify.theme.themes.dark[i] = dark[i];
        });
        Object.keys(light).forEach(i => {
          this.$vuetify.theme.themes.light[i] = light[i];
        });
      }
    }
  },
  methods: {
    darkMode(updatedTheme) {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

.gradient-color-bg {
  background: linear-gradient(to bottom right, var(--v-gradient1-base), var(--v-gradient2-base), var(--v-gradient3-base)) !important;
}
</style>

