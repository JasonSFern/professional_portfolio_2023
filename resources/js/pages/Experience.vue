<template>
  <v-container>
    <v-row>
      <v-col class="col-md-5 timeline-container">
        <div class="mt-16">
          <h2>
            <span class="accent-color-c">Skills</span>
          </h2>
          <br>

          <v-row>
            <v-col>
              <VueApexCharts type="radialBar" height="300" :options="chartOptions" :series="series"></VueApexCharts>
            </v-col>
          </v-row>

          <div class="d-flex flex-wrap">
            <div v-for="(item, index) in skillItems" :key="index" class="d-flex justify-start" style="width:50%;">
              <div class="pa-2" style="width:40px;padding-right:0px;">
                <img :src="item.icon" style="width:35px;height:auto;"/>
              </div>
              <div class="pa-2" style="width:230px">
                <strong>{{ item.name }}</strong>
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
      <v-col class="col-md-7 timeline-container">
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
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            // inverseOrder: true,
            track: {
                show: false,
            },
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Top 5',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return ''
                }
              }
            }
          }
        },
        labels: [],
      },
    }
  },
  created() {
    this.$store.dispatch('skills/getAllSkills').then(response => {
      this.chartOptions.labels = this.topFiveSkillsLabel
      this.series = this.topFiveSkillsNum

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
.timeline-container {
  position:relative;
  overflow: hidden;
  overflow-y:scroll;
  height: 95vh;
}

</style>