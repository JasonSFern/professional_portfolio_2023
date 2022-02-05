<template>
  <div>
    <vue-particles
      :color="starColor"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="centered-text">
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
    }
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