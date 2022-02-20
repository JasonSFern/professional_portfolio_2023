<template>
  <div>
    <v-app-bar
      :elevation="elevation"
      app
      :class="{
        'frost-dark': (applyFrosted && $vuetify.theme.dark),
        'frost-light': (applyFrosted && !$vuetify.theme.dark),
        'transparent': !applyFrosted
      }"
    >
      <v-menu offset-y rounded="b-xl nav-link">
        <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          small
          depressed
          class="d-flex d-sm-none mx-1"
          v-bind="attrs"
          v-on="on"
        />
        <p class="d-flex d-sm-none pt-4 primary-color-c">&nbsp;&nbsp;|&nbsp;</p>
        </template>
        <v-list>
          <v-list-item
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
          >
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        to="/"
        depressed 
        plain
        x-small
        class="nav-link"
      >
        <p class="pt-4 primary-color">Jason&nbsp;&nbsp;</p>
        <strong class="pt-4 bold"><p class="accent-color-c">Fernandes</p></strong>
      </v-btn>

      <p class="d-none d-sm-flex pt-4 primary-color-c">&nbsp;|&nbsp;</p>

      <v-btn
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        depressed 
        plain
        x-small
        class="d-none d-sm-flex nav-link"
      >
        <v-icon class="pr-1 pt-0 primary-color-c" small>{{ route.icon }}</v-icon>
        <p class="pt-4 primary-color-c">{{ route.title }}</p>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn v-if="$route.name != 'projects' && $route.name != 'viewproject'" class="mx-1" @click="darkMode" plain icon small>
        <v-icon v-if="!$vuetify.theme.dark">mdi-weather-sunny</v-icon>
        <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
      </v-btn>

      <!-- <v-menu offset-y rounded="b-xl nav-link">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            plain
            small
            v-bind="attrs"
            v-on="on"
            depressed
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(theme, key) in themes"
            :key="key"
            v-on:click="switchTheme(key)"
          >
            <v-list-item-title>{{ key }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

    </v-app-bar>
  </div>
</template>

<script>
import CustomThemes from '../plugins/custom_themes';

export default {
  name: "HeaderBar",
  computed: {
    routes: function () {
      return this.allRoutes.filter(i => !i.hidden)
    },
    applyFrosted: function () {
      if (this.$route.name !== 'home' && this.$route.name !== 'projects' && this.$route.name !== 'contact') {
        return true
      } else {
        return false
      }
    },
    elevation: function () {
      if (this.$route.name !== 'home' && this.$route.name !== 'projects' && this.$route.name !== 'contact') {
        return 4
      } else {
        return 0
      }
    },
  },
  data() {
    return {
      drawer: null,
      allRoutes: this.$router.options.routes,
      themes: CustomThemes
    };
  },
  methods: {
    darkMode() {
      this.$emit("darkMode", this.goDark);
    },
    switchTheme(themeName) {
      let selectedTheme = CustomThemes[themeName]
      let dark = selectedTheme.dark;
      let light = selectedTheme.light

      Object.keys(dark).forEach(i => {
        this.$vuetify.theme.themes.dark[i] = dark[i];
      });
      Object.keys(light).forEach(i => {
        this.$vuetify.theme.themes.light[i] = light[i];
      });
    }
  }
};
</script>

<style >

.nav-link p {
  font-size: 10px;
  font-family: 'Avenir-Book', sans-serif;
}

.nav-link .bold p{
  font-family: 'Avenir-Black', sans-serif;
}

.frost-dark {
  background-color: rgba(152, 151, 151, 0.2) !important; 
  backdrop-filter: blur(5px) !important;
}

.frost-light {
  background-color: rgba(255, 255, 255, 0.75) !important; 
  backdrop-filter: blur(5px) !important;
}

.transparent {
  background-color: rgba(0, 0, 0, 0) !important;
}

</style>