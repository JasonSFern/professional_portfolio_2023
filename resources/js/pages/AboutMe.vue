<template>
  <div ref="mainCont">
    <v-row class="my-sm-15">
      <v-col class="d-none d-sm-flex col-sm-1" />
      <v-col class="d-block d-md-flex col-12 col-sm-10">
        <!-- Profile info -->
        <div
          class="d-block mt-16 content-pane about-pane pa-6"
          :class="{
            'pane-dark': $vuetify.theme.dark,
            'pane-light': !$vuetify.theme.dark,
          }"
        >
          <!-- Profile image -->
          <div
            ref="profileImg"
            class="d-flex justify-space-around my-4 profile-section"
          >
            <img
              v-if="isMobile"
              class="profile-image"
              src="img/about/self_final_square.png"
            />
            <vue-compare-image
              v-else
              class="profile-image"
              hover
              :sliderLineWidth="sliderLine"
              :handleSize="handleSize"
              :leftImage="leftImage"
              :rightImage="rightImage"
              :sliderPositionPercentage="sliderPosition"
            />
          </div>
          <!-- Profile headers -->
          <div ref="profileHeaders" class="profile-section">
            <div v-if="profile">
              <div class="d-flex">
                <div
                  class="secondary-color-bg mr-4 rounded-sm"
                  style="width: 5px"
                ></div>

                <div class="d-block pa-0">
                  <div class="pa-0">
                    <h2>
                      <span class="primary-color-c">{{
                        profile.first_name
                      }}</span>
                      <span class="accent-color-c">{{
                        profile.last_name
                      }}</span>
                      <span class="text-caption">{{ profile.pronouns }}</span>
                    </h2>
                  </div>
                  <div class="pa-0">
                    <h5 class="primary-color-c">{{ profile.title }}</h5>
                  </div>
                </div>
              </div>
              <div class="my-8 d-block pa-0">
                <p class="primary-color-c">{{ profile.blurb }}</p>
              </div>
            </div>
          </div>
          <!-- Profile contact options -->
          <div ref="profileContact" class="mt-4 pa-0 profile-section">
            <div v-if="profile">
              <v-btn
                v-for="(c, index) in profile.contact"
                class="my-2"
                :key="`contact-btn-${index}`"
                :href="c.link"
                target="_blank"
                color="accent"
                x-large
                block
              >
                <v-icon class="mr-4 primary-color-c" dark>{{
                  `mdi-${index}`
                }}</v-icon>
                <span class="primary-color-c">{{ c.label }}</span>
              </v-btn>
            </div>
          </div>
          <!-- Profile vcard -->
          <div ref="profileQRCode" class="mt-12 profile-section">
            <div v-if="vcardInfo">
              <div class="mb-8">
                <v-btn
                  class="my-2"
                  color="primary"
                  x-large
                  block
                  @click="addContact"
                >
                  <span class="accent-color-c">Add contact</span>
                </v-btn>
              </div>

              <div class="d-flex justify-content-around">
                <VueVcard
                  :firstName="vcardInfo.first_name"
                  :lastName="vcardInfo.last_name"
                  :homeEmail="vcardInfo.email"
                  :homePhone="vcardInfo.phone"
                  :homeCity="vcardInfo.city"
                  :homeRegion="vcardInfo.region"
                  :homePost="vcardInfo.postal_code"
                  :homeCountry="vcardInfo.country"
                  :size="250"
                />
              </div>
              <p class="font-weight-bold text-center mt-8 primary-color-c">
                Add contact by scanning the QR Code
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex mt-md-16 resume-pane">
          <!-- Resume section -->
          <div
            class="d-block px-5 pb-4 mb-14 mb-md-0 content-pane resume-pane-int w-100"
            :class="{
              'pane-dark': $vuetify.theme.dark,
              'pane-light': !$vuetify.theme.dark,
            }"
          >
            <!-- Summary blurb -->
            <div ref="resumeSummary" class="resume-summary-section">
              <div v-if="profile" class="d-block d-lg-flex">
                <div class="col-12 col-lg-6">
                  <h3 class="mt-5 secondary-color-c">Summary</h3>
                  <p class="primary-color-c">
                    {{ profile.summary }}
                  </p>
                </div>
                <div class="col-12 col-lg-6">
                  <h3 class="mt-5 secondary-color-c">Strengths</h3>
                  <ul>
                    <li
                      class="primary-color-c"
                      v-for="(strength, index) in profile.strengths"
                      :key="`str-${index}`"
                    >
                      {{ strength }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="resume-main-section">
              <hr class="primary-color-bg" />
            </div>
            <!-- Sub tabs -->
            <div class="d-block d-lg-flex resume-main-section">
              <div
                v-for="stab in sectionTabs"
                :key="stab"
                class="col-12 col-lg-4 classification"
              >
                <button
                  class="resume-tab w-100 primary-color-c"
                  :class="{
                    'button-dark': $vuetify.theme.dark && stab == selectedTab,
                    'button-light': !$vuetify.theme.dark && stab == selectedTab,
                    'outline-dark': $vuetify.theme.dark && stab != selectedTab,
                    'outline-light':
                      !$vuetify.theme.dark && stab != selectedTab,
                  }"
                  v-on:click="selectedTab = stab"
                >
                  {{ stab }}
                </button>
              </div>
            </div>
            <div
              v-if="selectedTab == 'Education & Skills'"
              class="my-2 pt-5 resume-main-section"
            >
              <div ref="resumeEdSkills" class="d-block d-lg-flex">
                <div class="col-12 col-lg-6">
                  <div v-if="education">
                    <div
                      v-for="(entry, index) in education"
                      :key="index"
                      class="d-flex"
                    >
                      <div
                        class="px-2 pt-1 my-2 mr-4 edu-icon-col d-flex justify-content-around"
                      >
                        <img :src="entry.icon" class="edu-icon" />
                      </div>
                      <div class="pa-2">
                        <strong
                          ><h5 class="ma-0 secondary-color-c">
                            {{ entry.title }}
                          </h5></strong
                        >
                        <p class="ma-0 primary-color-c">
                          {{ entry.institute }}
                        </p>
                        <p class="ma-0 primary-color-c text-caption mt-1">
                          {{ formatDate(entry.end_date) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div v-if="skillItems">
                    <v-tooltip
                      v-for="(item, index) in skillItems"
                      :key="`skill-icon-${index}`"
                      bottom
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          v-bind="attrs"
                          v-on="on"
                          :src="item.icon"
                          class="skill-icon-col mx-4 my-4"
                        />
                      </template>
                      <div class="d-block">
                        <div class="d-flex justify-space-around">
                          <v-progress-circular
                            v-model="item.skill_level"
                            :width="12"
                            color="accent"
                            class="skill-icon mb-2"
                            style="opacity: 1 !important"
                          />
                        </div>
                        <p
                          class="font-weight-bold text-center mb-0 primary-color-c"
                        >
                          {{ item.name }}
                        </p>
                      </div>
                    </v-tooltip>
                  </div>
                </div>
              </div>
              <hr class="primary-color-bg" />
              <div class="d-block d-lg-flex col-12">
                <div ref="resumeSkillsTech" class="col-12 col-lg-6">
                  <div v-if="profile" class="mt-2">
                    <h3 class="secondary-color-c">Technical Skills</h3>
                    <ul>
                      <li
                        class="primary-color-c"
                        v-for="(skill_desc, skill) in profile.skills[
                          'Technical Skills'
                        ]"
                        :key="`skill-tech-${skill}`"
                      >
                        <strong class="accent-color-c">{{ skill }}: </strong
                        >{{ skill_desc }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div ref="resumeSkillsSoft" class="col-12 col-lg-6">
                  <div v-if="profile" class="mt-2">
                    <h3 class="secondary-color-c">Soft Skills</h3>
                    <ul>
                      <li
                        class="primary-color-c"
                        v-for="(skill_desc, skill) in profile.skills[
                          'Soft Skills'
                        ]"
                        :key="`skill-soft-${skill}`"
                      >
                        <strong class="accent-color-c">{{ skill }}: </strong
                        >{{ skill_desc }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="selectedTab == 'Professional Experience'"
              class="mx-3 my-2 pt-5 resume-section"
            >
              <div ref="resumeExperiencePro">
                <div
                  v-for="(exp, index) in experienceProfessional"
                  :key="`exp-${index}`"
                  class="mt-4"
                >
                  <h4 class="text-uppercase secondary-color-c">
                    <strong>{{ exp.company }}</strong>
                  </h4>
                  <div class="d-flex justify-space-between">
                    <div>
                      <h5 class="accent-color-c">
                        <strong>{{ exp.title }}</strong>
                      </h5>
                    </div>
                    <div>
                      <h5 class="text-caption mt-1 primary-color-c">
                        {{ formatDate(exp.start_date) }} -
                        {{
                          exp.start_date == exp.end_date
                            ? "Present"
                            : formatDate(exp.end_date)
                        }}
                      </h5>
                    </div>
                  </div>
                  <ul class="mt-2">
                    <li
                      class="primary-color-c"
                      v-for="(description, d_index) in exp.description"
                      :key="`desc-${d_index}`"
                    >
                      {{ description }}
                    </li>
                  </ul>

                  <hr class="primary-color-bg" />
                </div>
              </div>
            </div>
            <div
              v-if="selectedTab == 'Volunteer Experience'"
              class="mx-3 my-2 pt-5 resume-main-section"
            >
              <div ref="resumeExperienceVol">
                <div
                  v-for="(exp, index) in experienceVolunteer"
                  :key="`exp-${index}`"
                  class="mt-4"
                >
                  <h4 class="text-uppercase secondary-color-c">
                    <strong>{{ exp.company }}</strong>
                  </h4>
                  <div class="d-flex justify-space-between">
                    <div>
                      <h5 class="accent-color-c">
                        <strong>{{ exp.title }}</strong>
                      </h5>
                    </div>
                    <div>
                      <h5 class="text-caption mt-1 primary-color-c">
                        {{ formatDate(exp.start_date) }} -
                        {{
                          exp.start_date == exp.end_date
                            ? "Present"
                            : formatDate(exp.end_date)
                        }}
                      </h5>
                    </div>
                  </div>
                  <ul class="mt-2">
                    <li
                      class="primary-color-c"
                      v-for="(description, d_index) in exp.description"
                      :key="`desc-${d_index}`"
                    >
                      {{ description }}
                    </li>
                  </ul>

                  <hr class="primary-color-bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="d-none d-sm-flex col-sm-1" />
    </v-row>
  </div>
</template>

<script>
import VueCompareImage from "vue-compare-image";
import VueVcard from "vue-vcard";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: `AboutMe`,
  components: {
    VueCompareImage,
    VueVcard,
  },
  computed: {
    ...mapGetters({
      skills: "skills/getAllSkills",
      experience: "resume/getAllExperience",
      education: "resume/getAllEducation",
      profile: "resume/getProfile",
    }),
    skillItems() {
      return this.skills;
    },
    experienceVolunteer() {
      return this.experience.filter((exp) => exp.type == "volunteer");
    },
    experienceProfessional() {
      return this.experience.filter((exp) => exp.type == "professional");
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        return true;
      return false;
    },
    vcardInfo() {
      if (this.profile)
        return {
          first_name: this.profile.first_name,
          last_name: this.profile.last_name,
          email: this.profile.contact.email.label,
          phone: this.profile.contact.phone.label,
          city: this.profile.location.city,
          region: this.profile.location.region,
          postal_code: this.profile.location.postal_code,
          country: this.profile.location.country,
        };
      return null;
    },
  },
  data() {
    return {
      sectionTabs: [
        "Education & Skills",
        "Professional Experience",
        "Volunteer Experience",
      ],
      selectedTab: "Education & Skills",
      // image comparison params
      leftImage: "img/about/self_final_square.png",
      rightImage: "",
      rightImageIndex: 0,
      sliderLine: 1,
      handleSize: 0,
      sliderPosition: 0.75,
      effectImages: ["img/about/self_glitch_square.png"],
    };
  },
  mounted() {
    this.gsap.set(this.$refs.mainCont, { opacity: 0 });
    this.getRightPic();

    const promiseProfile = this.$store.dispatch("resume/getProfile");
    const promiseEducation = this.$store.dispatch("resume/getAllEducation");
    const promiseExperience = this.$store.dispatch("resume/getAllExperience");
    const promiseSkills = this.$store.dispatch("skills/getAllSkills");

    Promise.all([
      promiseProfile,
      promiseEducation,
      promiseExperience,
      promiseSkills,
    ]).then(() => {
      this.loadContent();
    });
  },
  methods: {
    loadContent() {
      this.gsap
        .timeline()
        .fromTo(
          this.$refs.mainCont,
          { opacity: 0 },
          { duration: 0.75, opacity: 1, delay: 0.5 }
        )
        .fromTo(
          ".profile-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".resume-summary-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".resume-main-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        );
    },
    getRightPic() {
      this.rightImageIndex++;

      if (this.rightImageIndex >= this.effectImages.length) {
        this.rightImageIndex = 0;
      }

      this.rightImage = this.effectImages[this.rightImageIndex];
    },
    formatDate(date) {
      return moment(date).format("MMMM Do, YYYY");
    },
    addContact() {
      const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:${this.vcardInfo.last_name};${this.vcardInfo.last_name}\nFN:${this.vcardInfo.first_name} ${this.vcardInfo.last_name}\nTEL;TYPE=home:${this.vcardInfo.phone}\nEMAIL;TYPE=internet,home:${this.vcardInfo.email}\nADR;TYPE=home:;;;${this.vcardInfo.city};${this.vcardInfo.region};${this.vcardInfo.postal_code};${this.vcardInfo.country}\nEND:VCARD`;

      const blob = new Blob([vcard], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);

      const newLink = document.createElement("a");
      newLink.download =
        `${this.vcardInfo.first_name} ${this.vcardInfo.last_name}` + ".vcf";
      newLink.href = url;

      newLink.click();
    },
  },
};
</script>

<style scoped>
.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

.resume-tab {
  height: auto;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 10px 0 10px 0;
}

.edu-icon-col {
  width: 90px;
  height: 80px;
  background-color: white;
  border-radius: 8px;
}

.edu-icon {
  width: 70px;
  height: 70px;
}

.skill-icon-col {
  width: 35px;
  height: auto;
}

@media (min-width: 960px) {
  .about-pane {
    width: 460px;
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
  }
  .resume-pane {
    width: 75%;
  }
  .resume-pane-int {
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .about-pane {
    width: auto;
    border-top-right-radius: 10px !important;
    border-top-left-radius: 10px !important;
  }
  .resume-pane {
    width: auto;
  }
  .resume-pane-int {
    width: auto;
    border-bottom-right-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
  }
}
</style>
