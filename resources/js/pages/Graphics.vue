<template>
  <vue-scroll-snap :fullscreen="true">
    <project-tile v-for="item in items" :key="item.id" :item="item" class="item"></project-tile>  
  </vue-scroll-snap>

</template>

<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script>
import ProjectTile from '../components/ProjectTile.vue';
import VueScrollSnap from "vue-scroll-snap";
import { mapGetters } from 'vuex'

export default {
  name: `Graphics`,
  components: {
    ProjectTile,
    VueScrollSnap
  },
  computed: {
    ...mapGetters({
      graphicsProjects: 'projects/getAllGraphicsProjects',
    }),
    items() {
      return this.graphicsProjects
    },
  },
  created() {
    this.$store.dispatch('projects/getAllGraphicsProjects')
  }
};
</script>
