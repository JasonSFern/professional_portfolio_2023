<template>
  <v-footer
    app
    bottom
    fixed
    :class="{
      'foot-frost': (applyFrosted && $vuetify.theme.dark),
      'foot-frost-light': (applyFrosted && !$vuetify.theme.dark),
      'transparent': !applyFrosted
    }"
  >
    <v-spacer></v-spacer>
    <div class="d-flex footer-content" style="height:30px">
      <p class="pt-12 primary-color-c">&copy; {{ new Date().getFullYear() }} - Jason S Fernandes</p>
    </div>
    <v-spacer></v-spacer>
  </v-footer>
</template>
<script>
export default {
  name: "FooterBar",
  data: () => ({}),
  computed: {
    applyFrosted: function () {
      if (this.$route.name !== 'home' && this.$route.name !== 'projects') {
        return true
      } else {
        return false
      }
    },
  }
};
</script>

<style scoped>

@font-face {
  font-family: "Lato-Light";
  src: url("/public/fonts/Lato-Light.ttf");
}
.footer-content p {
  font-size: 13px;
  font-family: 'Lato-Light', sans-serif;
  /* font-family: 'Cerebri-Sans-Boo', sans-serif; */
  /* font-family: 'Lato-Regular', sans-serif; */
  text-align: center;
  padding-top: 0px !important;
}

.foot-frost {
  filter: drop-shadow(2px 10px 10px black) !important;
  background-color: rgba(152, 151, 151, 0.2) !important; 
  box-shadow: 1rem 1rem 1rem 1rem rgba(0, 0, 0, .2) !important; 
  backdrop-filter: blur(5px) !important;
}

.foot-frost-light {
  filter: drop-shadow(2px 2px 10px grey) !important;
  background-color: rgba(255, 255, 255, 0.75) !important; 
  box-shadow: 1rem 1rem 1rem 1rem rgba(0, 0, 0, .2) !important; 
  backdrop-filter: blur(5px) !important;
}

.transparent {
  background-color: rgba(0, 0, 0, 0) !important;
}


</style>