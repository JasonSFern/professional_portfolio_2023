<template>
  <div class="mt-15">
    <h2>
      <span>Experience</span>
    </h2>

    <v-timeline
      class=""
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="displayVariables[item.type].color"
        :icon="displayVariables[item.type].icon"
        fill-dot
      >
        <v-card
          :color="color"
          dark
        >
          <div class="pa-3 timeline-head">
            <h6>{{ item.title }}</h6>
            <p>{{ item.institute }}</p>
            <p v-if="item.type == 'work' || item.type == 'volunteer'" >{{ item.start_date }} - {{ item.end_date }}</p>
            <p v-else >{{ item.end_date }}</p>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: `ExperienceTimeline`,
  computed: {
    ...mapGetters({
      experience: 'experience/getAllExperience',
    }),
    items() {
      return this.experience
    },
    color() {
      return this.$vuetify.theme.currentTheme.accent
    }
  },
  created() {
    this.$store.dispatch('experience/getAllExperience').then(response => {
      this.isLoaded = true
    })
  },
  data() {
    return {
      isLoaded: false,
      displayVariables: {
        'work': { 
          color: 'green', 
          icon: 'mdi-briefcase-variant', 
        },
        'education': {
          color: 'orange',   
          icon: 'mdi-book-education',
        },
        'volunteer': {
          color: 'red',   
          icon: 'mdi-hand-coin' 
        }
      }
    }
  }
};
</script>

<style scoped>


.timeline-head p {
  font-size:12px;
  margin:0px;
  display:block;
}
</style>