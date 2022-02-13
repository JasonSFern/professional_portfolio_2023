<template>
  <v-app class="gradient-color-bg" :dark="goDark">
    <header-bar :goDark="goDark" @changeTheme="updateTheme($event)"/>

    <transition-page>
      <router-view/>
    </transition-page>

    <footer-bar/>
  </v-app>
</template>

<script>
import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";
import TransitionPage from '../transitions/TransitionPage.vue';

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

