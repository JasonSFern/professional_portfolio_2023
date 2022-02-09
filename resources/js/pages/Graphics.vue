<template>
  <vue-scroll-snap :isLoaded="isLoaded">
    <project-tile
      v-for="item in items"
      :key="item.id"
      :item="item"
      class="item"
      v-on:click.native="viewProject(item.id)"
      :isLoaded="isLoaded"
    />
  </vue-scroll-snap>
</template>

<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script>
import ProjectTile from '../components/ProjectTile.vue';
import VueScrollSnap from '../components/VueScrollSnap.vue';
import { mapGetters } from 'vuex'

export default {
  name: `Graphics`,
  components: {
    ProjectTile,
    VueScrollSnap
  },
  data() {
    return {
      isLoaded: false
    }
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
    this.$store.dispatch('projects/getAllGraphicsProjects').then(response => {
      this.isLoaded = true
    })
  },
  methods: {
    viewProject(item_id) {
      this.$router.push({
        name: 'viewgraphicproject',
        params: {
          item_id: item_id,
          type: 1
        }
      })
    }
  }
};
</script>
