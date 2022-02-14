<template>
  <div>
    <v-app-bar
      elevation="0"
      app
      :class="{
        'head-frost': (applyFrosted && $vuetify.theme.dark),
        'head-frost-light': (applyFrosted && !$vuetify.theme.dark),
        'transparent': !applyFrosted
      }"
    >
      <v-toolbar-title class="px-md-4 nav-link d-flex">
        <router-link to="/" class="pr-md-6 d-flex">
          <p class="pt-12 primary-color-c">Jason&nbsp;&nbsp;</p>
          <strong class="bold pt-12"><p class="accent-color-c">Fernandes</p></strong>
        </router-link>
        <p class="pt-12 primary-color-c">&nbsp;|&nbsp;</p>
        <router-link
          class="pa-md-4 py-md-6 d-flex"
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
        >
          <v-icon class="pr-md-1 pt-2 primary-color-c" x-small>{{ route.icon }}</v-icon>
          <p class="pt-6 primary-color-c">{{ route.title }}</p>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn v-if="$route.name != 'projects' && $route.name != 'viewproject'" class="px-md-4" @click="darkMode" icon>
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
    applyFrosted: function () {
      if (this.$route.name !== 'home' && this.$route.name !== 'projects') {
        return true
      } else {
        return false
      }
    },
  },
  data() {
    return {
      drawer: null,
      allRoutes: this.$router.options.routes
    };
  },
  methods: {
    darkMode() {
      this.$emit("darkMode", this.goDark);
    }
  }
};
</script>

<style >
@font-face {
  font-family: "Cerebri-Sans-Book";
  src: url("/public/fonts/Cerebri-Sans-Book.ttf");
}
@font-face {
  font-family: "Lato-Regular";
  src: url("/public/fonts/Lato-Regular.ttf");
}
@font-face {
  font-family: "Lato-Bold";
  src: url("/public/fonts/Lato-Bold.ttf");
}
@font-face {
  font-family: "Lato-Light";
  src: url("/public/fonts/Lato-Light.ttf");
}
.nav-link p {
  /* font-family: 'Cerebri-Sans-Boo', sans-serif; */
  font-size: 13px;
  font-family: 'Lato-Light', sans-serif;
  /* font-family: 'Lato-Regular', sans-serif; */
}

.nav-link .bold p{
  font-family: 'Lato-Bold', sans-serif;
}
.nav-font-2 {
  font-family: 'Cerebri-Sans-Book', sans-serif;
}


.head-frost {
  filter: drop-shadow(2px 10px 10px black) !important;
  background-color: rgba(152, 151, 151, 0.2) !important; 
  box-shadow: 1rem 1rem 1rem 1rem rgba(0, 0, 0, .2) !important; 
  backdrop-filter: blur(5px) !important;
}

.head-frost-light {
  filter: drop-shadow(2px 2px 10px grey) !important;
  background-color: rgba(255, 255, 255, 0.75) !important; 
  box-shadow: 1rem 1rem 1rem 1rem rgba(0, 0, 0, .2) !important; 
  backdrop-filter: blur(5px) !important;
}

.transparent {
  background-color: rgba(0, 0, 0, 0) !important;
}


/* .grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.1); } */

</style>