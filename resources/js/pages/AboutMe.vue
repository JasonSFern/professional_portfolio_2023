<template>
  <div ref="mainCont">
    <v-row class="my-sm-12">
      <v-col class="d-none d-sm-flex col-sm-1 col-lg-2" />
      <v-col class="col-12 col-sm-10 col-lg-8">
        <!-- Profile info -->
        <div v-if="profile" class="mt-sm-12 resume-pane">
          <!-- Resume section -->
          <div
            class="d-block px-5 pb-4 mb-14 mb-md-0 content-pane resume-pane-int w-100"
          >
            <!-- Summary blurb -->
            <div ref="resumeBio" class="resume-bio-section mt-15 mt-sm-0">
              <div class="d-block d-lg-flex mt-5">
                <div>
                  <div class="d-block d-lg-flex">
                    <div class="col-12 col-lg-5">
                      <!-- Profile image -->
                      <div
                        ref="profileImg"
                        class="d-flex justify-space-around my-4 profile-section"
                      >
                        <img
                          v-if="mobileDevice"
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
                        <div class="d-flex justify-center">
                          <div class="d-flex">
                            <div class="d-block pa-0">
                              <div class="pa-0 mt-12">
                                <h2>
                                  <span class="primary-color-c">{{
                                    profile.first_name
                                  }}</span>
                                  <span class="accent-color-c">{{
                                    profile.last_name
                                  }}</span>
                                  <span class="text-caption">{{
                                    profile.pronouns
                                  }}</span>
                                </h2>
                              </div>
                              <div class="pa-0">
                                <h4 class="primary-color-c">
                                  {{ profile.title }}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-7 mt-3">
                      <h2
                        class="mb-8 text-center text-lg-left secondary-color-c"
                      >
                        Hello 👋
                      </h2>
                      <p
                        v-for="(content, index) in profile.bio"
                        :key="`bio-para-${index}`"
                        class="primary-color-c"
                      >
                        {{ content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Services -->
            <div class="resume-services-section py-10">
              <hr class="primary-color-bg" />
            </div>
            <div class="resume-services-section">
              <div class="w-100">
                <h2 class="text-center my-5 secondary-color-c">Services</h2>
                <div class="col-12">
                  <p class="primary-color-c">{{ profile.services.intro }}</p>
                </div>
                <div class="d-block d-lg-flex flex-wrap">
                  <div
                    v-for="(service, index) in profile.services.content"
                    :key="`service-${index}`"
                    class="col-12 col-lg-6"
                  >
                    <div class="d-flex mb-6">
                      <div
                        class="secondary-color-bg mr-4 rounded-sm"
                        style="width: 5px"
                      />
                      <h4
                        class="mt-2 ml-2 primary-color-c text-uppercase font-weight-bold"
                      >
                        {{ service.title }}
                      </h4>
                    </div>
                    <p
                      v-for="(paragraph, index) in service.description"
                      :key="`service-para-${index}`"
                      class="primary-color-c"
                    >
                      {{ paragraph }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Toolbox -->
            <div class="resume-toolbox-section py-10">
              <hr class="primary-color-bg" />
            </div>
            <div class="resume-toolbox-section">
              <div class="w-100">
                <h2 class="text-center my-5 secondary-color-c">Toolbox</h2>
                <div v-if="skillItems" class="d-block">
                  <div
                    v-for="(skillset, index) in skillItems"
                    :key="`skill-set-${index}`"
                    class="d-block"
                  >
                    <div class="d-flex justify-center mt-10">
                      <h4
                        class="mt-2 ml-2 primary-color-c text-uppercase font-weight-bold"
                      >
                        {{ index.split("--")[1] }}
                      </h4>
                    </div>
                    <div class="d-flex flex-wrap justify-center">
                      <v-tooltip
                        v-for="(item, index) in skillset"
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
              </div>
            </div>
            <!-- Ethos -->
            <div class="resume-ethos-section py-10">
              <hr class="primary-color-bg" />
            </div>
            <div class="resume-ethos-section">
              <div class="w-100">
                <h2 class="text-center my-5 secondary-color-c">Ethos</h2>
                <div class="col-12">
                  <p class="primary-color-c">{{ profile.ethos.intro }}</p>
                </div>
                <div class="d-block d-lg-flex flex-wrap">
                  <div
                    v-for="(etho, index) in profile.ethos.content"
                    :key="`etho-${index}`"
                    class="col-12 col-lg-6"
                  >
                    <div class="d-flex mb-6">
                      <div
                        class="secondary-color-bg mr-4 rounded-sm"
                        style="width: 5px"
                      />
                      <div class="d-block">
                        <h4
                          class="mt-2 ml-2 primary-color-c text-uppercase font-weight-bold"
                        >
                          {{ etho.title }}
                        </h4>
                        <h5 class="mt-2 ml-2 primary-color-c">
                          {{ etho.tagline }}
                        </h5>
                      </div>
                    </div>
                    <p class="primary-color-c">
                      {{ etho.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- CTA -->
            <div class="resume-cta-section py-10">
              <hr class="primary-color-bg" />
            </div>
            <div ref="resumeCta" class="resume-cta-section">
              <div v-if="profile">
                <div>
                  <h2 class="text-center my-5 secondary-color-c">
                    Ready to get started?
                  </h2>
                  <div class="d-block d-lg-flex my-2">
                    <div class="col-12 col-lg-6">
                      <v-btn
                        key="btn-projects"
                        href="/projects"
                        color="accent"
                        x-large
                        block
                      >
                        <v-icon class="mr-4 primary-color-c" dark>
                          mdi-code-tags
                        </v-icon>
                        <span class="primary-color-c">View Projects</span>
                      </v-btn>
                    </div>
                    <div class="col-12 col-lg-6">
                      <v-btn
                        key="btn-contact"
                        to="/contact"
                        color="accent"
                        x-large
                        block
                      >
                        <v-icon class="mr-4 primary-color-c" dark>
                          mdi-card-account-details
                        </v-icon>
                        <span class="primary-color-c">Contact Me</span>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="d-none d-sm-flex col-sm-1 col-lg-2" />
    </v-row>
  </div>
</template>

<script>
import VueCompareImage from "vue-compare-image";
import VueVcard from "vue-vcard";
import { isMobile } from "../plugins/helpers";
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
      profile: "resume/getProfile",
    }),
    skillItems() {
      return this.skills;
    },
    mobileDevice() {
      return isMobile();
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
    const promiseSkills = this.$store.dispatch("skills/getAllSkills");

    Promise.all([promiseProfile, promiseSkills]).then(() => {
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
          { duration: 0.75, opacity: 1 }
        )
        .fromTo(
          ".profile-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".resume-bio-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".resume-services-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".resume-toolbox-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".resume-ethos-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".resume-cta-section",
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

.skill-icon-col {
  width: 35px;
  height: auto;
}

.resume-pane {
  width: auto;
}
.resume-pane-int {
  width: auto;
  border-radius: 10px !important;
}
/* } */
</style>
