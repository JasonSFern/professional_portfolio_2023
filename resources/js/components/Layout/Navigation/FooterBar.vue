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
      <p class="primary-color-c">
        &copy; {{ new Date().getFullYear() }} - Jason S Fernandes
      </p>
      <v-btn
        class="primary-color-c px-1 info-button"
        depressed
        plain
        small
        @click="showDisclaimer = true"
      >
        <v-icon small>mdi-information</v-icon>
      </v-btn>
    </div>
    <v-spacer></v-spacer>

    <v-dialog v-model="showDisclaimer" scrollable max-width="500px">
      <v-card>
        <v-card-title>Disclaimer</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>
            All of the images, artwork, text and graphics contained in this
            portfolio, unless otherwise specified and/or credited, are the
            copyright of Jason Fernandes. All rights reserved. All other
            materials are the copyright and/or trademark of the respective
            owners. All materials featured are offered for informative purposes
            only and as such are offered on a 'as is' basis.
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-footer>
</template>
<script>
export default {
  name: "FooterBar",
  data() {
    return {
      showDisclaimer: false,
    };
  },
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
  padding-top: 5px;
  margin-bottom: 0px;
}

.info-button {
  min-width: 5px;
  width: 5px;
}

.footer-frosted {
  filter: drop-shadow(2px 10px 10px black) !important;
  background-color: rgba(152, 151, 151, 0.2) !important;
  box-shadow: 1rem 1rem 1rem 0.7rem rgba(0, 0, 0, 0.75) !important;
  backdrop-filter: blur(5px) !important;
}
</style>
