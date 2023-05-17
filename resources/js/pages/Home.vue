<template>
  <div>
    <div ref="grid">
      <PerspectiveGrid class="d-none d-sm-flex" />
    </div>
    <div ref="logo" class="centered-logo" @click="navigateToAboutMe">
      <SplashLogo />
    </div>
  </div>
</template>

<script>
import SplashLogo from "../components/Effects/SplashLogo.vue";
import PerspectiveGrid from "../components/Effects/PerspectiveGrid.vue";

export default {
  name: `Home`,
  components: {
    PerspectiveGrid,
    SplashLogo,
  },
  mounted() {
    this.gsap
      .timeline()
      .fromTo(
        this.$refs.grid,
        { opacity: 0 },
        { duration: 0.75, opacity: 1, delay: 1 }
      )
      .fromTo(
        this.$refs.logo,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 0.25 }
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
