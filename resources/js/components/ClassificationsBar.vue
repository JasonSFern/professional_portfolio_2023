<template>
  <div>
    <div v-for="item in items" :key="item.id" class="px-4 classification" v-on:click="filterProjects(item.id)">
      <!-- <v-icon class="pr-md-1" x-small>{{ item.icon }}</v-icon> -->
      <span class="font-weight-light text-sm-body-2">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ClassificationsBar",
  computed: {
    ...mapGetters({
      classifications: 'general/getAllClassifications',
    }),
    items() {
      return this.classifications
    },
  },
  created() {
    this.$store.dispatch('general/getAllClassifications')
  },
  methods: {
    filterProjects(id) {
      console.log(id)
      this.$emit("filterProjects", id);
    }
  }
};
</script>

<style >
.classification {
  border-radius: 20px;
}

.selected {
  opacity: 0.5;
  background-color:black;
}
</style>