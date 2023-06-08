<template>
  <v-app :dark="goDark">
    <div ref="header">
      <HeaderBar :goDark="goDark" @darkMode="darkMode($event)" />
    </div>

    <TransitionPage>
      <router-view />
    </TransitionPage>

    <div ref="footer">
      <FooterBar />
    </div>
  </v-app>
</template>

<script>
import HeaderBar from "../components/Layout/Navigation/HeaderBar";
import FooterBar from "../components/Layout/Navigation/FooterBar";
import TransitionPage from "../components/Transitions/TransitionPage";
import { isMobile } from "../plugins/helpers";
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
      defaultTheme: "cloud",
    };
  },
  computed: {
    mobileDevice() {
      return isMobile();
    },
  },
  watch: {
    $route(to, from) {
      if (
        (to.name !== "projects" && to.name !== "viewproject") ||
        (to.name == "projects" && this.mobileDevice)
      ) {
        let selectedTheme = getThemeData(this.defaultTheme);

        Object.keys(selectedTheme.dark).forEach((i) => {
          this.$vuetify.theme.themes.dark[i] = selectedTheme.dark[i];
          this.$vuetify.theme.themes.light[i] = selectedTheme.light[i];
        });

        this.$vuetify.theme.dark = this.isDark;
      }
    },
  },
  created() {
    const darkMode = this.$cookies.get("isDark");

    if (darkMode == null) {
      this.$cookies.set("isDark", this.isDark, -1);
    } else {
      this.$vuetify.theme.dark = this.isDark =
        darkMode == "true" ? true : false;
    }
  },
  mounted() {
    this.gsap
      .timeline()
      .fromTo(
        this.$refs.header,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 2 }
      )
      .fromTo(
        this.$refs.footer,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 0 }
      );
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = this.isDark = !this.$vuetify.theme.dark;
      this.$cookies.set("isDark", this.isDark, -1);
    },
  },
};
</script>