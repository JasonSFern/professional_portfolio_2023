<template>
  <div>
    <vue-particles
      :color="starColor"
      :particleOpacity="0.7"
      :particlesNumber="120"
      shapeType="polygon"
      :particleSize="4"
      :linesColor="linesColor"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="120"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div ref="logo" class="centered-text">
      <splash-logo></splash-logo>
    </div>
  </div>
</template>

<script>
import SplashLogo from '../components/SplashLogo.vue';
export default {
  name: `Home`,
  computed: {
    starColor: function () {
      return this.$vuetify.theme.currentTheme.secondary
    },
    linesColor: function () {
      return this.$vuetify.theme.currentTheme.accent
    }
  },
  mounted() {
      this.gsap.fromTo(this.$refs.logo, {opacity:0}, {duration: .5, opacity: 1, delay: .5});
  },
  data() {
    return {
      test: '' 
    }
  },
  components: {
    SplashLogo,
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

.unified-color {
  background-color: var(--v-primary-base) !important;
}
</style>