<template>
  <v-footer
    app
    bottom
    fixed
    class="transparent"
    :class="{
      'footer-frosted': applyFrosted,
      transparent: !applyFrosted,
    }"
  >
    <v-spacer></v-spacer>
    <div class="d-flex footer-content" style="height: 30px">
      <p class="primary-color-c">
        &copy; {{ new Date().getFullYear() }} - Jason S Fernandes
      </p>
      <v-btn
        class="primary-color-c px-1 info-button"
        depressed
        plain
        small
        @click="showDisclaimer = true"
      >
        <v-icon small>mdi-information</v-icon>
      </v-btn>
    </div>
    <v-spacer></v-spacer>

    <v-dialog v-model="showDisclaimer" scrollable max-width="500px">
      <v-card>
        <v-card-title>
          <div class="w-100 d-flex justify-space-between">
            <div>About This Site</div>
            <div class="d-flex">
              <img
                src="/img/icons/vuejs.png"
                class="skill-icon px-1 mb-0 mr-4 mr-md-0"
              /><img
                src="/img/icons/laravel.png"
                class="skill-icon px-1 mb-0 mr-4 mr-md-0"
              />
            </div>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="mb-5">
            <div>
              <p>
                Welcome to my digital portfolio! This is a where my education,
                professional experience, skills and sample projects
                demonstrating my skills are dynamically populated via data
                stored in a database. The front end is built using Vue.js 2.6
                with Vuetify. The back end is built using Laravel 8.81
                connecting to a MySQL database. Hosting is done on AWS. Some of
                the special features you will find built into this portfolio
                are:
              </p>
            </div>
          </div>
          <div class="mb-5">
            <div>
              <ul>
                <li>
                  <strong>3D Objects: </strong>The splash logo in the home page
                  and the project tiles in the projects page (on desktop view
                  only) are "3D" objects which change perspective based on the
                  position of your mouse.
                </li>
                <li>
                  <strong>Resume Hot-link: </strong>This button located in the
                  top right takes you to the latest copy of my print resume on
                  Google Drive.
                </li>
                <li>
                  <strong>Dark / Light Mode: </strong>Switching between dark /
                  light mode is available by clicking the moon / sun icon in the
                  top right corner. The default mode is set to dark mode.
                  Clicking the icon changes the portfolio's colour theme on all
                  pages to match the selected setting. This option is not
                  available on the project related pages as each project has its
                  own theme which overrides the default colour scheme.
                </li>
                <li>
                  <strong>Image Comparison: </strong>An image comparison slider
                  that is on my profile picture (on desktop view only).
                </li>
                <li>
                  <strong>vCard Contact: </strong>Contact information that is
                  encoded in a QR code for scanning. It also can be downloaded
                  as a .vcf file. Thee options make adding my contact
                  information to your phone or email client easy.
                </li>
                <li>
                  <strong>Project Themes: </strong>The projects page features a
                  snap scrolling effect with custom themes integration. The
                  project themes overrides the system that is used by the dark /
                  light mode to switch theme colours. Each project has its own
                  colour scheme.
                </li>
                <li>
                  <strong>Vuex: </strong>Vuex integration for storing resume and
                  projects page data in state, allowing for a snappier response
                  when switching between pages.
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-5">
            <div>
              <p>
                Feel free to continue exploring the portfolio. The codebase is
                also available for viewing via the Github button below.
              </p>
            </div>
          </div>
          <div class="mb-5">
            <v-btn
              href="https://github.com/JasonSFern/professional_portfolio"
              target="_blank"
              class="mr-2 w-100"
              color="accent"
            >
              <v-icon class="primary-color-c" dark>fab fa-github</v-icon>
            </v-btn>
          </div>
          <div class="mb-5">
            <div class="resume-main-section">
              <hr class="primary-color-bg" />
            </div>
            <p class="disclaimer-text">
              Disclaimer: All of the images, artwork, text and graphics
              contained in this portfolio, unless otherwise specified and/or
              credited, are the copyright of Jason Fernandes. All rights
              reserved. All other materials are the copyright and/or trademark
              of the respective owners. All materials featured are offered for
              informative purposes only and as such are offered on a 'as is'
              basis.
            </p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="mr-2 w-100"
            color="accent"
            @click="showDisclaimer = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-footer>
</template>
<script>
import { isMobile } from "../../../plugins/helpers";

export default {
  name: "FooterBar",
  data() {
    return {
      showDisclaimer: false,
    };
  },
  computed: {
    applyFrosted: function () {
      if (this.mobileDevice || this.specialBrowser) {
        if (this.$route.name !== "home") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.$route.name !== "home" && this.$route.name !== "projects") {
          return true;
        } else {
          return false;
        }
      }
    },
    specialBrowser() {
      if (/^((?!chrome|android).)*safari|firefox/i.test(navigator.userAgent))
        return true;
      return false;
    },
    mobileDevice() {
      return isMobile();
    },
  },
};
</script>

<style scoped>
.footer-content p {
  font-size: 14px;
  font-family: "Avenir-Book", sans-serif;
  text-align: center;
  padding-top: 5px;
  margin-bottom: 0px;
}

.info-button {
  min-width: 5px;
  width: 5px;
}

.footer-frosted {
  filter: drop-shadow(2px 10px 10px black) !important;
  background-color: rgba(152, 151, 151, 0.2) !important;
  box-shadow: 1rem 1rem 1rem 0.7rem rgba(0, 0, 0, 0.75) !important;
  backdrop-filter: blur(5px) !important;
}
</style>
