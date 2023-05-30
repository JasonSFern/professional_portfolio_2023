<template>
  <div>
    <div class="d-flex justify-content-center">
      <div
        v-for="item in items"
        :key="item.id"
        class="px-4 classification primary-color-c"
        v-on:click="filterProjects(item.id)"
      >
        <button
          :class="{
            'button-dark':
              $vuetify.theme.dark && item.id == selectedClassification,
            'button-light':
              !$vuetify.theme.dark && item.id == selectedClassification,
            'outline-dark':
              $vuetify.theme.dark && item.id != selectedClassification,
            'outline-light':
              !$vuetify.theme.dark && item.id != selectedClassification,
          }"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ClassificationsBar",
  props: {
    filter: {
      type: String,
      default: "project",
    },
  },
  computed: {
    ...mapGetters({
      classifications: "general/getClassifications",
    }),
    items() {
      return this.classifications.filter((c) => c.type == this.filter);
    },
  },
  created() {
    this.$store.dispatch("general/getClassifications");
  },
  data() {
    return {
      selectedClassification: 0,
    };
  },
  methods: {
    filterProjects(id) {
      this.selectedClassification = id;
      this.$emit("filterProjects", id);
    },
  },
};
</script>