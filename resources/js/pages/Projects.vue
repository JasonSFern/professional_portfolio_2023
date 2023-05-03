<template>
  <v-main>
    <classifications-bar
      class="classifications-menu"
      :class="{
        mobile: isMobile,
      }"
      @filterProjects="setClassification($event)"
    ></classifications-bar>
    <scroll-snap
      v-if="!isMobile"
      :isLoaded="isLoaded"
      ref="scrollsnap"
      @setProjectTheme="setProjectTheme($event)"
    >
      <project-tile-max
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="item"
        :isLoaded="isLoaded"
      />
    </scroll-snap>

    <scroll-skew v-if="isMobile" :items="items">
      <project-tile-min
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="item"
        :isLoaded="isLoaded"
      />
    </scroll-skew>
  </v-main>
</template>

<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"
></script>
<script>
import ClassificationsBar from "../components/ClassificationsBar.vue";
import ProjectTileMax from "../components/ProjectTileMax.vue";
import ProjectTileMin from "../components/ProjectTileMin.vue";
import ScrollSnap from "../components/ScrollSnap.vue";
import ScrollSkew from "../components/ScrollSkew.vue";

import { getThemeData } from "../plugins/custom_themes";
import { mapGetters } from "vuex";

export default {
  name: `Projects`,
  components: {
    ClassificationsBar,
    ProjectTileMax,
    ProjectTileMin,
    ScrollSnap,
    ScrollSkew,
  },
  data() {
    return {
      isLoaded: false,
      classification: 0,
    };
  },
  computed: {
    ...mapGetters({
      projects: "projects/getAllProjects",
    }),
    items() {
      if (this.classification > 0) {
        let filtered = this.projects.filter(
          (row) => row.classification == this.classification
        );

        setTimeout(() => {
          if (!this.isLoaded) this.isLoaded = true;
        }, 300);

        return filtered;
      } else {
        setTimeout(() => {
          if (!this.isLoaded) this.isLoaded = true;
        }, 300);

        return this.projects;
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
  created() {
    this.$store.dispatch("projects/getAllProjects").then((response) => {
      this.isLoaded = true;
      this.filteredItems = this.projects;
    });
  },
  methods: {
    setClassification(e) {
      this.isLoaded = false;
      setTimeout(() => {
        this.classification = e;
      }, 300);
    },
    setProjectTheme(item_index) {
      if (!this.isMobile) {
        let selectedTheme = getThemeData(this.items[item_index].display_theme);

        Object.keys(selectedTheme).forEach((i) => {
          this.$vuetify.theme.themes.dark[i] = selectedTheme[i];
          this.$vuetify.theme.themes.light[i] = selectedTheme[i];
        });

        this.$vuetify.theme.dark =
          this.items[item_index].display_theme.split("--")[1] == "dark";
      }
    },
  },
};
</script>

<style scoped>
.classifications-menu {
  position: fixed;
  width: 100%;
  height: 98px;
  top: 105px;
  transform: translateY(-50%);
  z-index: 1;
  background-color: transparent;
}

.mobile {
  backdrop-filter: blur(5px) !important;
  background-color: var(--v-background-base) !important;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
}
</style>