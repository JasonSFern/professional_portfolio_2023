<template>
  <div>
    <!-- <v-app app> -->
    <v-app-bar elevation="0" app color="background">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title class="px-md-4">
        <span class="font-weight-light text-sm-body-2">Jason</span>
        <span class="font-weight-bold text-sm-body-2 blue--text">Fernandes</span>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            tag="v-btn"
            :value="route.name"
            elevation="0"
            color="transparent"
            x-small
          ><v-icon class="pr-md-3" x-small>{{ route.icon }}</v-icon>{{ route.title }}
            <!-- <v-icon>question_answer</v-icon> -->
          </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

        <v-btn class="px-md-4" @click="changeTheme" icon>
          <v-icon v-if="!$vuetify.theme.dark">mdi-weather-sunny</v-icon>
          <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
        </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
  <!-- </v-app> -->
    <!-- <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="340">
      <v-list class="pt-4">
        <v-list-tile active-class="green--text" to="/">
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/resume">
          <v-list-tile-content>
            <v-list-tile-title>RESUME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/services">
          <v-list-tile-content>
            <v-list-tile-title>SERVICES</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/portfolio">
          <v-list-tile-content>
            <v-list-tile-title>PORTFOLIO</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/blog">
          <v-list-tile-content>
            <v-list-tile-title>BLOG</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/contact">
          <v-list-tile-content>
            <v-list-tile-title>CONTACT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dense color="transparent" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Jason</span>
        <span class="green--text">Fernandes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark==true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" active-class="green--text headline">Home</v-btn>
        <v-btn flat to="/resume" active-class="green--text headline">Resume</v-btn>
        <v-btn flat to="/services" active-class="green--text headline">Services</v-btn>
        <v-btn flat to="/portfolio" active-class="green--text headline">Portfolio</v-btn>
        <v-btn flat to="/blog" active-class="green--text headline">Blog</v-btn>
        <v-btn flat to="/contact" active-class="green--text headline">Contact</v-btn>
        <v-btn @click="changeTheme" depressed small icon>
          <v-icon v-if="goDark==true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar> -->
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  // props: {
  //   goDark: {
  //     type: Boolean
  //   }
  // },
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