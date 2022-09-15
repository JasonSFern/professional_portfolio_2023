<template>
  <v-app class="gradient-color-bg" :dark="goDark">
    <header-bar :goDark="goDark" @darkMode="darkMode($event)" />

    <transition-page>
      <router-view />
    </transition-page>

    <footer-bar />
  </v-app>
</template>

<script>
import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";
import TransitionPage from "../transitions/TransitionPage";
import { getThemeData } from "../plugins/custom_themes";

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
    TransitionPage,
  },
  data() {
    return {
      goDark: false,
      isDark: true,
    };
  },
  watch: {
    $route(to, from) {
      if (to.name !== "projects" && to.name !== "viewproject") {
        let selectedTheme = getThemeData("default");

        Object.keys(selectedTheme.dark).forEach((i) => {
          this.$vuetify.theme.themes.dark[i] = selectedTheme.dark[i];
          this.$vuetify.theme.themes.light[i] = selectedTheme.light[i];
        });

        this.$vuetify.theme.dark = this.isDark;
      }
    },
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = this.isDark = !this.$vuetify.theme.dark;
    },
  },
};
</script>