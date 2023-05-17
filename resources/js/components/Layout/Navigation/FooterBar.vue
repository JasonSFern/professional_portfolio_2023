<template>
  <v-footer
    app
    bottom
    fixed
    class="transparent"
    :class="{
      'footer-frosted': applyFrosted,
      transparent: !applyFrosted,
    }"
  >
    <v-spacer></v-spacer>
    <div class="d-flex footer-content" style="height: 30px">
      <p class="pt-12 primary-color-c">
        &copy; {{ new Date().getFullYear() }} - Jason S Fernandes
      </p>
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
      if (
        this.$route.name !== "home" &&
        this.$route.name !== "projects" &&
        this.$route.name !== "contact"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.footer-content p {
  font-size: 14px;
  font-family: "Avenir-Book", sans-serif;
  text-align: center;
  padding-top: 0px !important;
}

.footer-frosted {
  filter: drop-shadow(2px 10px 10px black) !important;
  background-color: rgba(152, 151, 151, 0.2) !important;
  box-shadow: 1rem 1rem 1rem 0.7rem rgba(0, 0, 0, 0.75) !important;
  backdrop-filter: blur(5px) !important;
}
</style>
