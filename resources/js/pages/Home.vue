<template>
  <div>
    <div ref="grid" class="d-none d-sm-block">
      <vue-particles
        v-if="isNotChrome"
        :key="particlesKey"
        :color="starColor"
        :particleOpacity="0.3"
        :particlesNumber="99"
        shapeType="polygon"
        :particleSize="4"
        :linesColor="linesColor"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="120"
        :moveSpeed="2"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      />
      <PerspectiveGrid v-else class="d-none d-sm-flex" />
    </div>
    <div ref="logo" class="centered-logo" @click="navigateToAboutMe">
      <SplashLogo />
    </div>
  </div>
</template>

<script>
import SplashLogo from "../components/Splash/SplashTitles.vue";
import PerspectiveGrid from "../components/Splash/PerspectiveGrid.vue";

export default {
  name: `Home`,
  components: {
    PerspectiveGrid,
    SplashLogo,
  },
  computed: {
    starColor() {
      return this.$vuetify.theme.currentTheme.accent;
    },
    linesColor() {
      return this.$vuetify.theme.currentTheme.primary;
    },
    isNotChrome() {
      return /^((?!chrome|android).)*safari|firefox/i.test(navigator.userAgent);
    },
  },
  watch: {
    starColor() {
      this.particlesKey++;
    },
  },
  mounted() {
    this.gsap.fromTo(
      this.$refs.grid,
      { opacity: 0 },
      { duration: 0.75, opacity: 1, delay: 1 }
    );
  },
  data() {
    return {
      particlesKey: 1,
    };
  },
  methods: {
    navigateToAboutMe() {
      this.$router.push({ name: "AboutMe" });
    },
  },
};
</script>

<style scoped>
.centered-logo {
  position: absolute;
  text-align: center;
  top: 15%;
  width: 100%;
}
</style>
