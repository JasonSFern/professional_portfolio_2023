<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-7 col-lg-5 scroll-container">
        <div ref="educationCont" class="mt-16 pt-10">
          <div ref="education">
            <!-- <h2>Education</h2> -->
            <br />

            <v-row>
              <v-col>
                <div class="d-flex flex-wrap">
                  <div
                    v-for="(entry, index) in education"
                    :key="index"
                    class="d-flex justify-space-between"
                  >
                    <div class="pr-0 pl-2 py-2 edu-icon-col">
                      <img :src="entry.icon" class="edu-icon" />
                    </div>
                    <div class="pa-2 edu-text-col">
                      <strong
                        ><p class="ma-0">{{ entry.title }}</p></strong
                      >
                      <p class="ma-0">{{ entry.institute }}</p>
                      <p class="ma-0">{{ entry.end_date }}</p>
                    </div>
                  </div>
                </div>
                <br />
              </v-col>
            </v-row>

            <!-- <h2>Skills</h2> -->
            <br />

            <div class="d-flex flex-wrap">
              <div
                v-for="(item, index) in skillItems"
                :key="index"
                class="d-flex justify-start skill-entry"
              >
                <v-hover v-slot="{ hover }">
                  <div class="pa-2 skill-text-col">
                    <v-progress-circular
                      v-model="item.skill_level"
                      :rotate="270"
                      :size="100"
                      :width="15"
                      color="accent"
                      class="skill-icon"
                      :class="{ 'on-hover': hover }"
                    >
                      <img :src="item.icon" class="skill-icon-col" />
                    </v-progress-circular>
                    <div class="d-flex justify-center label-wrap">
                      <strong
                        ><p class="ma-0">{{ item.name }}</p></strong
                      >
                    </div>
                  </div>
                </v-hover>
              </div>
            </div>
          </div>
        </div>

        <div ref="whitepaper" class="mt-15 mb-6">
          <v-btn
            :href="resumeLink"
            target="_blank"
            color="accent"
            dark
            large
            style="width: 100%"
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
import ExperienceTimeline from "../components/ExperienceTimeline.vue";
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";

export default {
  name: `Experience`,
  components: {
    ExperienceTimeline,
    VueApexCharts,
  },
  computed: {
    ...mapGetters({
      skills: "skills/getAllSkills",
      education: "experience/getAllEducationExperience",
    }),
    skillItems() {
      return this.skills;
    },
    topFiveSkillsNum() {
      let array = [];
      for (var i = 0; i < 5; i++) {
        array.push(this.skillItems[i].skill_level);
      }
      return array;
    },
    topFiveSkillsLabel() {
      let array = [];
      for (var i = 0; i < 5; i++) {
        array.push(this.skillItems[i].name);
      }
      return array;
    },
  },
  data() {
    return {
      resumeLink:
        "https://drive.google.com/file/d/1WQKMkWxwyjAf5LdRPWyq4FryFRSRV920/view?usp=sharing",
      series: [],
    };
  },
  created() {
    this.$store.dispatch("experience/getAllEducationExperience");
    this.$store.dispatch("skills/getAllSkills").then((response) => {
      this.isLoaded = true;
    });
  },
  mounted() {
    this.gsap
      .timeline()
      .fromTo(
        this.$refs.educationCont,
        { xPercent: 20 },
        { duration: 0.5, xPercent: 0 }
      )
      .fromTo(
        this.$refs.education,
        { xPercent: -20, opacity: 0 },
        { duration: 0.5, opacity: 1, xPercent: 0 }
      )
      .fromTo(
        this.$refs.whitepaper,
        { opacity: 0 },
        { duration: 0.5, opacity: 1 },
        ">"
      );
  },
  methods: {},
};
</script>

<style scoped>
@media (min-width: 580px) {
  .scroll-container {
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    height: 95vh;
    scrollbar-width: none; /* Firefox 64 */
  }
}

.edu-icon-col {
  width: 90px;
}

.edu-icon {
  width: 70px;
  height: auto;
}

.edu-text-col {
  width: 410px;
}

.skill-label {
  text-align: center;
}

.skill-icon {
  width: 40px;
  padding-right: 0px;
}

.skill-icon-col {
  width: 35px;
  height: auto;
}

.skill-text-col {
  width: 225px;
}

.skill-entry {
  width: 25%;
}

.label-wrap {
  margin-top: 10px;
}
</style>
