<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-7 col-lg-5 scroll-container">
        <div class="mt-16 pt-10">
          <h2>
            <span>Education</span>
          </h2>
          <br>

          <v-row>
            <v-col>
              <div class="d-flex flex-wrap">
                <div v-for="(entry, index) in education" :key="index" class="d-flex justify-space-between">
                  <div class="pa-2" style="width:55px;padding-right:0px;">
                    <img :src="entry.icon" style="width:45px;height:auto;"/>
                  </div>
                  <div class="pa-2" style="width:410px">
                    <strong><p class="ma-0">{{ entry.title }}</p></strong>
                    <div class="d-flex justify-space-between">
                      <div><p>{{ entry.institute }}</p></div>
                      <div><p>{{ entry.end_date }}</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </v-col>
          </v-row>

          <h2>Skills</h2>
          <br />

          <div class="d-flex flex-wrap">
            <div v-for="(item, index) in skillItems" :key="index" class="d-flex justify-start" style="width:50%;">
              <div class="pa-2" style="width:40px;padding-right:0px;">
                <img :src="item.icon" style="width:35px;height:auto;"/>
              </div>
              <div class="pa-2" style="width:225px">
                <strong><p class="ma-0">{{ item.name }}</p></strong>
                <v-progress-linear v-model="item.skill_level" buffer-value="100" color="accent" height="10"></v-progress-linear>
              </div>
            </div>
          </div>
        </div>

        <div class="my-7">
          <v-btn
            :href="resumeLink"
            target="_blank"
            color="accent"
            dark
            large
            style="width:100%"
          >
            Whitepaper
            <v-icon right dark>fas fa-file-download</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col class="col-12 col-md-5 col-lg-7 scroll-container">
        <experience-timeline class=""></experience-timeline>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
import ExperienceTimeline from '../components/ExperienceTimeline.vue';
import VueApexCharts from 'vue-apexcharts'
import { mapGetters } from 'vuex'

export default {
  name: `Experience`,
  components: {
    ExperienceTimeline,
    VueApexCharts
  },
  computed: {
    ...mapGetters({
      skills: 'skills/getAllSkills',
      education: 'experience/getAllEducationExperience'
    }),
    skillItems() {
      return this.skills
    },
    topFiveSkillsNum() {
      let array = []
      for (var i = 0; i < 5; i ++) {
        array.push(this.skillItems[i].skill_level);
      }
      return array
    },
    topFiveSkillsLabel() {
      let array = []
      for (var i = 0; i < 5; i ++) {
        array.push(this.skillItems[i].name);
      }
      return array
    }
  },
  data() {
    return {
      resumeLink: "https://drive.google.com/file/d/1WQKMkWxwyjAf5LdRPWyq4FryFRSRV920/view?usp=sharing",
      series: [],
    }
  },
  created() {
    this.$store.dispatch('experience/getAllEducationExperience')
    this.$store.dispatch('skills/getAllSkills').then(response => {
      this.isLoaded = true
    })
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>

@media (min-width: 580px) {
  .scroll-container {
    position:relative;
    overflow: hidden;
    overflow-y:scroll;
    height: 95vh;
  }
}

</style>