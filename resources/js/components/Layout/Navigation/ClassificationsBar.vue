<template>
  <div ref="classifications-menu">
    <div class="d-flex" :class="cssClasses">
      <div
        v-for="item in items"
        :key="item.id"
        class="px-2 px-sm-4 classification primary-color-c"
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
import { isMobile } from "../../../plugins/helpers";
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
      let items = this.classifications.filter(
        (c) => c.type == this.filter && c.project_count > 0
      );

      var obj = {};
      obj.id = 0;
      obj.name = "All";
      obj.type = "project";
      items.unshift(obj);

      return items;
    },
  },
  data() {
    return {
      selectedClassification: 0,
      cssClasses: "justify-center",
    };
  },
  created() {
    this.$store.dispatch("general/getClassifications");
    this.onWindowResize();
  },
  mounted() {
    this.gsap.fromTo(
      ".classifications-menu",
      { opacity: 0 },
      { duration: 0.5, opacity: 1, delay: 2 }
    );
    this.$nextTick(() => {
      window.addEventListener("resize", this.onWindowResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    filterProjects(id) {
      this.selectedClassification = id;
      this.$emit("filterProjects", id);
    },
    onWindowResize() {
      if (isMobile && window.innerWidth < 500) {
        this.cssClasses = "px-4 overflow-x-auto";
      } else {
        this.cssClasses = "justify-center";
      }
    },
  },
};
</script>