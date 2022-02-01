<template>
  <v-app class="unified-color" :dark="goDark">
    <!-- <v-content> -->
      <!-- <v-container align-center> -->
        <header-bar :goDark="goDark" @changeTheme="updateTheme($event)"/>

        <transition-page>
          <router-view/>
        </transition-page>

        <footer-bar/>
      <!-- </v-container> -->
    <!-- </v-content> -->
    <!-- <TheFooter/> -->
  </v-app>
</template>

<script>
import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";
import TransitionPage from '../transitions/TransitionPage.vue';
// import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
    TransitionPage
  },
  data() {
    return { goDark: false };
  },
  methods: {
    updateTheme(updatedTheme) {
      // this.goDark = !updatedTheme;
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

.unified-color {
  background-color: var(--v-background-base) !important;
  /* color: var(--v-accent-lighten2) !important; */
}
</style>

