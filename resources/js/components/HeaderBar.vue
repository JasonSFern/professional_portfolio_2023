<template>
  <div>
    <v-app-bar elevation="0" app color="transparent">
      <v-toolbar-title class="px-md-4">
        <router-link to="/" class="pr-md-6">
          <span class="font-weight-light text-sm-body-2">Jason</span>
          <span class="font-weight-bold text-sm-body-2 blue--text">Fernandes</span>
        </router-link>
        <span> | </span>
        <router-link
          class="pa-md-4 py-md-6"
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
        >
          <v-icon class="pr-md-1" x-small>{{ route.icon }}</v-icon>
          <span class="font-weight-light text-sm-body-2">{{ route.title }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn v-if="$route.name == 'home'" class="px-md-4" @click="changeTheme" icon>
        <v-icon v-if="!$vuetify.theme.dark">mdi-weather-sunny</v-icon>
        <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
      </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  computed: {
    routes: function () {
      return this.allRoutes.filter(i => !i.hidden)
    },
  },
  data() {
    return {
      drawer: null,
      allRoutes: this.$router.options.routes
    };
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    }
  }
};
</script>

<style >
</style>