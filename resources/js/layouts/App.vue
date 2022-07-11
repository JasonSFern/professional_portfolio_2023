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
import CustomThemes from "../plugins/custom_themes";

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
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      if (to.name !== "projects" && to.name !== "viewproject") {
        let selectedTheme = CustomThemes["default"];
        let dark = selectedTheme.dark;
        let light = selectedTheme.light;

        Object.keys(dark).forEach((i) => {
          this.$vuetify.theme.themes.dark[i] = dark[i];
        });
        Object.keys(light).forEach((i) => {
          this.$vuetify.theme.themes.light[i] = light[i];
        });

        this.$vuetify.theme.dark = true;
      }
    },
  },
  methods: {
    darkMode(updatedTheme) {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
