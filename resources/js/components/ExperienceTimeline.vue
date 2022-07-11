<template>
  <div ref="timelineCont" class="mt-md-15 pt-md-11 pb-10 pb-md-0 pr-md-5">
    <div ref="timeline">
      <h2 class="accent-color-c">
        <!-- Timeline -->
      </h2>

      <v-timeline class="" align-top dense>
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="displayVariables[item.type].color"
          :icon="displayVariables[item.type].icon"
          fill-dot
        >
          <v-card class="frost-dark" dark>
            <div class="pa-3 timeline-head">
              <h6>{{ item.title }}</h6>
              <p>{{ item.institute }}</p>
              <p v-if="item.type == 'work' || item.type == 'volunteer'">
                {{ item.start_date }} - {{ item.end_date }}
              </p>
              <p v-else>{{ item.end_date }}</p>
            </div>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: `ExperienceTimeline`,
  computed: {
    ...mapGetters({
      experience: "experience/getAllExperience",
    }),
    items() {
      return this.experience;
    },
  },
  created() {
    this.$store.dispatch("experience/getAllExperience").then((response) => {
      this.isLoaded = true;
    });
  },
  mounted() {
    this.gsap
      .timeline()
      .fromTo(
        this.$refs.timelineCont,
        { xPercent: -20 },
        { duration: 0.5, xPercent: 0 }
      )
      .fromTo(
        this.$refs.timeline,
        { xPercent: 20, opacity: 0 },
        { duration: 0.5, opacity: 1, xPercent: 0 }
      );
  },
  data() {
    return {
      isLoaded: false,
      displayVariables: {
        work: {
          color: "green",
          icon: "mdi-briefcase-variant",
        },
        education: {
          color: "orange",
          icon: "mdi-book-education",
        },
        volunteer: {
          color: "red",
          icon: "mdi-hand-coin",
        },
      },
    };
  },
};
</script>

<style scoped>
.timeline-head p {
  color: var(--v-primary-base);
  font-size: 12px;
  font-family: "Avenir", sans-serif !important;
  margin: 0px;
  display: block;
}

.timeline-head h6 {
  color: var(--v-primary-base);
}

.frost-dark {
  background-color: rgba(141, 141, 141, 0.2) !important;
  backdrop-filter: blur(5px) !important;
}
</style>
