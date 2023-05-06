<template>
  <div>
    <!-- <vue-particles
      :key="particlesKey"
      :color="starColor"
      :particleOpacity="0.3"
      :particlesNumber="120"
      shapeType="polygon"
      :particleSize="4"
      :linesColor="linesColor"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="120"
      :moveSpeed="2"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles> -->
    <PerspectiveGrid class="d-none d-sm-flex canvas"></PerspectiveGrid>
    <div ref="logo" class="centered-text">
      <splash-logo></splash-logo>
    </div>
  </div>
</template>

<script>
import SplashLogo from "../components/SplashLogo.vue";

import PerspectiveGrid from "../components/PerspectiveGrid.vue";
export default {
  name: `Home`,
  components: {
    PerspectiveGrid,
    SplashLogo,
  },
  computed: {
    starColor: function () {
      return this.$vuetify.theme.currentTheme.secondary;
    },
    linesColor: function () {
      return this.$vuetify.theme.currentTheme.accent;
    },
  },
  watch: {
    starColor() {
      this.particlesKey++;
    },
  },
  mounted() {
    this.gsap.fromTo(
      this.$refs.logo,
      { opacity: 0 },
      { duration: 0.5, opacity: 1, delay: 0.5 }
    );
  },
  data() {
    return {
      particlesKey: 1,
    };
  },
};
</script>

<style scoped>
#particles-js {
  height: 100vh;
}

.centered-text {
  position: absolute;
  text-align: center;
  top: 15%;
  width: 100%;
}
</style>
