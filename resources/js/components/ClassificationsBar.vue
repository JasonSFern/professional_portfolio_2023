<template>
  <div>
    <div class="d-flex justify-content-center">
      <div
        v-for="item in items"
        :key="item.id"
        class="px-4 classification"
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

<style >
.classification button {
  padding: 5px;
  width: 100px;
  height: 40px;
  backdrop-filter: blur(5px);
  border-radius: 40px;
  text-transform: uppercase;
  font-family: "Gigantic FS", sans-serif;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin: 25px 0 5px 0;
  font-size: 0.8rem;
  outline: none;
}

.classification button:hover {
  text-decoration: none;
  outline: none;
  transform: scale(1.05);
}

.classification button:active {
  text-decoration: none;
  outline: none;
  transform: scale(1);
}

.button-light {
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.7);
  border: solid 1px rgba(56, 56, 56, 0.1);
}

.button-dark {
  box-shadow: inset 0 0 2000px rgba(56, 56, 56, 0.65);
  border: solid 1px rgba(255, 255, 255, 0.1);
}

.outline-light {
  border: solid 1px rgba(56, 56, 56, 0.7);
}

.outline-dark {
  border: solid 1px rgb(183, 183, 183, 0.7);
}
</style>