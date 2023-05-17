<template>
  <div>
    <v-app-bar
      :elevation="elevation"
      app
      :class="{
        frosted: applyFrosted && !isMobile,
        transparent: !isMobile,
        solid: isMobile,
      }"
    >
      <v-btn to="/" depressed plain x-small class="d-flex d-sm-none nav-link">
        <h5 class="pt-2 primary-color-c primary-color-c-glow">J</h5>
        <strong class="pt-2 bold"
          ><h5 class="accent-color-c accent-color-c-glow">F</h5></strong
        >
      </v-btn>

      <v-menu offset-y class="nav-link">
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            small
            depressed
            class="d-flex d-sm-none mx-1"
            v-bind="attrs"
            v-on="on"
          />
          <p class="d-flex d-sm-none pt-4 primary-color-c">
            &nbsp;&nbsp;|&nbsp;
          </p>
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

      <v-btn to="/" depressed plain x-small class="d-none d-sm-flex nav-link">
        <p class="pt-4 primary-color-c primary-color-c-glow">
          Jason&nbsp;&nbsp;
        </p>
        <strong class="pt-4 bold"
          ><p class="accent-color-c accent-color-c-glow">Fernandes</p></strong
        >
      </v-btn>

      <p class="d-none d-sm-flex pt-4 primary-color-c">&nbsp;|&nbsp;</p>

      <v-btn
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        depressed
        plain
        medium
        class="d-none d-sm-flex nav-link"
      >
        <v-icon class="pr-1 pt-0 primary-color-c" small>{{
          route.icon
        }}</v-icon>
        <p class="pt-4 primary-color-c">
          {{ route.title }}
        </p>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        class="mx-1 secondary-color-bg-glow secondary-color-c-glow"
        color="secondary"
        href="https://drive.google.com/file/d/1yaWP4JcBuoBX9ZkcdBM3MkP4SqhpHIBg/view?usp=sharing"
        target="_blank"
        style="font-weight: 700"
        depressed
        outlined
        small
      >
        PDF Resume&nbsp;&nbsp;
        <v-icon x-small>mdi-download</v-icon>
      </v-btn>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            v-show="$route.name != 'projects' && $route.name != 'viewproject'"
            class="mx-1 primary-color-c"
            @click="darkMode"
            plain
            icon
            large
          >
            <v-icon v-if="!$vuetify.theme.dark" class="sun-glow"
              >mdi-weather-sunny</v-icon
            >
            <v-icon v-else class="moon-glow">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>

        <p
          v-if="!$vuetify.theme.dark"
          class="font-weight-bold text-center mb-0 primary-color-c"
        >
          Switch to Dark Mode
        </p>
        <p v-else class="font-weight-bold text-center mb-0">
          Switch to Light Mode
        </p>
      </v-tooltip>

      <v-dialog
        v-if="showThemePicker"
        v-model="dialog"
        scrollable
        max-width="300px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-1 primary-color-c"
            icon
            plain
            v-bind="attrs"
            v-on="on"
            depressed
            large
          >
            <v-icon class="rainbow-text">mdi-palette</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Select Theme</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <v-btn
              :color="theme.light.gradient12"
              v-for="(theme, key) in themes"
              :key="key"
              v-on:click="switchTheme(key)"
              class="col-12 mb-2"
            >
              <v-icon>{{ theme.icon }}</v-icon
              >&nbsp;&nbsp;{{ key }}
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </div>
</template>

<script>
import { CustomThemes, getThemeData } from "../plugins/custom_themes";

export default {
  name: "HeaderBar",
  computed: {
    routes: function () {
      return this.allRoutes.filter((i) => !i.hidden);
    },
    applyFrosted: function () {
      if (this.validateRoute()) {
        return true;
      } else {
        return false;
      }
    },
    elevation: function () {
      if (this.validateRoute()) {
        return 4;
      } else {
        return 0;
      }
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        return true;
      return false;
    },
  },
  data() {
    return {
      drawer: null,
      allRoutes: this.$router.options.routes,
      showThemePicker: false,
      themes: CustomThemes,
      dialog: false,
    };
  },
  methods: {
    darkMode() {
      this.$emit("darkMode", this.goDark);
    },
    switchTheme(themeName) {
      let selectedTheme = getThemeData(themeName);

      Object.keys(selectedTheme.dark).forEach((i) => {
        this.$vuetify.theme.themes.dark[i] = selectedTheme.dark[i];
        this.$vuetify.theme.themes.light[i] = selectedTheme.light[i];
      });
    },
    validateRoute() {
      if (
        this.$route.name !== "home" &&
        this.$route.name !== "projects" &&
        this.$route.name !== "contact" &&
        this.$route.name !== "page-not-found"
      ) {
        return true;
      } else {
        if (this.$route.name == "projects" && this.isMobile) return true;
        return false;
      }
    },
  },
};
</script>

<style>
.nav-link p {
  font-size: 0.8rem !important;
  font-family: "Avenir-Book", sans-serif;
}

.nav-link .bold p {
  font-size: 0.9rem !important;
  font-family: "Avenir-Black", sans-serif;
}

.frosted {
  background-color: rgba(152, 151, 151, 0.2) !important;
  backdrop-filter: blur(5px) !important;
}

.solid {
  backdrop-filter: blur(5px) !important;
  background-color: var(--v-background-base) !important;
}

.sun-glow {
  text-shadow: 0 0 10px #face33, 0 0 21px #face33, 0 0 42px #face33;
  color: #face33 !important;
}

.moon-glow {
  text-shadow: 0 0 10px #ffffff, 0 0 21px #ffffff, 0 0 42px #ffffff;
}

.rainbow-text {
  background-image: linear-gradient(
    to top,
    purple,
    purple,
    blue,
    green,
    yellow,
    orange,
    red,
    red
  ) !important;
  -webkit-background-clip: text !important;
  color: transparent !important;
}
</style>