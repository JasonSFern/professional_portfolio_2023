<template>
  <v-footer app bottom fixed :color="footerColor">
    Developed with&nbsp;
    <v-icon color="red">mdi-laravel</v-icon>&nbsp;and&nbsp;
    <v-icon color="green">mdi-vuejs</v-icon>&nbsp;and&nbsp;
    <v-icon color="blue">mdi-vuetify</v-icon>
    <v-spacer></v-spacer>
    <div>
      &copy; {{ new Date().getFullYear() }}
       —
      <strong>Jason S Fernandes</strong>
    </div>
    <!-- <q class="text-center">Programming isn't about what you know; it's about what you can figure out.</q> -->
  </v-footer>
</template>
<script>
export default {
  name: "FooterBar",
  data: () => ({}),
  computed: {
    footerColor: function () {
      if (this.$route.name == 'home') {
        return 'transparent'
      } else {
        return 'background'
      }
    },
  }
};
</script>