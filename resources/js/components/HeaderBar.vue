<template>
  <div>
    <v-app-bar
      :elevation="elevation"
      app
      class="transparent"
      :class="{
        frosted: applyFrosted,
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

      <v-btn to="/" depressed plain x-small class="nav-link">
        <p class="pt-4 primary-color-c">Jason&nbsp;&nbsp;</p>
        <strong class="pt-4 bold"
          ><p class="accent-color-c">Fernandes</p></strong
        >
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
        <v-icon class="pr-1 pt-0 primary-color-c" small>{{
          route.icon
        }}</v-icon>
        <p class="pt-4 primary-color-c">{{ route.title }}</p>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        class="mx-1"
        color="secondary"
        href="https://drive.google.com/file/d/1yaWP4JcBuoBX9ZkcdBM3MkP4SqhpHIBg/view?usp=sharing"
        target="_blank"
        style="font-weight: 700"
        depressed
        outlined
        x-small
      >
        PDF Resume&nbsp;&nbsp;
        <v-icon x-small>mdi-download</v-icon>
      </v-btn>
      <p
        v-if="$route.name != 'projects' && $route.name != 'viewproject'"
        class="d-none d-sm-flex pt-4 primary-color-c"
      >
        &nbsp;&nbsp;&nbsp;|&nbsp;
      </p>
      <v-btn
        v-if="$route.name != 'projects' && $route.name != 'viewproject'"
        class="mx-1 primary-color-c"
        @click="darkMode"
        plain
        icon
        small
      >
        <v-icon v-if="!$vuetify.theme.dark">mdi-weather-sunny</v-icon>
        <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
      </v-btn>

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
            small
            v-bind="attrs"
            v-on="on"
            depressed
          >
            <v-icon>mdi-palette</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Select Theme</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <v-btn
              :color="theme.light.gradient3"
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
  font-size: 10px;
  font-family: "Avenir-Book", sans-serif;
}

.nav-link .bold p {
  font-family: "Avenir-Black", sans-serif;
}

.frosted {
  background-color: rgba(152, 151, 151, 0.2) !important;
  backdrop-filter: blur(5px) !important;
}
</style>