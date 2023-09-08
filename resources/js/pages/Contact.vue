<template>
  <div ref="mainCont">
    <v-row class="my-sm-12">
      <v-col class="d-none d-sm-flex col-sm-1 col-lg-1 col-xl-2" />
      <v-col class="col-12 col-sm-10 col-lg-10 col-xl-8">
        <!-- Profile info -->
        <div v-if="profile" class="mt-sm-12 contact-pane">
          <!-- Profile info -->
          <div
            class="d-block px-5 pb-4 mb-14 mb-md-0 content-pane contact-pane-int w-100"
            :class="{
              'pane-dark': $vuetify.theme.dark && !mobileDevice,
              'pane-light': !$vuetify.theme.dark && !mobileDevice,
            }"
          >
            <div ref="resumeBio" class="resume-bio-section mt-12 mt-sm-0">
              <div class="d-block d-lg-flex mt-5">
                <div class="col-lg-12">
                  <div class="d-block d-lg-flex">
                    <div class="col-12 col-lg-5">
                      <!-- Profile image -->
                      <div
                        ref="profileImg"
                        class="d-flex justify-space-around my-4 profile-section"
                      >
                        <img
                          class="profile-image"
                          src="img/about/self_final_square.png"
                        />
                      </div>
                      <!-- Profile headers -->
                      <div ref="profileHeaders" class="profile-section">
                        <div class="d-flex justify-center">
                          <div class="d-flex">
                            <div class="d-block pa-0">
                              <div class="pa-0 mt-2">
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
                    <!-- Profile contact options -->
                    <div class="col-12 col-lg-7 pr-lg-6">
                      <div
                        ref="profileContact"
                        class="mt-4 pa-0 profile-section"
                      >
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
                          <div class="mt-8 mt-lg-12 d-block d-lg-flex">
                            <div class="pr-0 pr-lg-2">
                              <v-btn
                                class="my-2"
                                color="primary"
                                block
                                x-large
                                @click="addContact"
                              >
                                <span class="accent-color-c">
                                  <v-icon class="mr-4 accent-color-c" dark>
                                    mdi-account-plus
                                  </v-icon>
                                  Add contact
                                </span>
                              </v-btn>
                            </div>
                            <div v-if="vcardInfo">
                              <v-btn
                                class="my-2"
                                color="primary"
                                block
                                x-large
                                @click="showQRCode = true"
                              >
                                <span class="accent-color-c">
                                  <v-icon class="mr-4 accent-color-c" dark>
                                    mdi-qrcode
                                  </v-icon>
                                  Scan QR Code
                                </span>
                              </v-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="d-none d-sm-flex col-sm-1 col-lg-1 col-xl-2" />
    </v-row>

    <v-dialog v-model="showQRCode" scrollable max-width="500px">
      <v-card>
        <v-card-text>
          <!-- Profile vcard -->
          <div ref="profileQRCode" class="mt-12">
            <div v-if="vcardInfo">
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
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="mr-2 mb-2 w-100"
            color="accent"
            @click="showQRCode = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VueCompareImage from "vue-compare-image";
import VueVcard from "vue-vcard";
import { isMobile } from "../plugins/helpers";
import { mapGetters } from "vuex";

export default {
  name: `AboutMe`,
  components: {
    VueCompareImage,
    VueVcard,
  },
  computed: {
    ...mapGetters({
      profile: "resume/getProfile",
    }),
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
      showQRCode: false,
    };
  },
  mounted() {
    this.gsap.set(this.$refs.mainCont, { opacity: 0 });

    const promiseProfile = this.$store.dispatch("resume/getProfile");

    Promise.all([promiseProfile]).then(() => {
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

.contact-pane {
  width: auto;
  width: 100%;
}
.contact-pane-int {
  width: auto;
  border-radius: 10px !important;
}
</style>
