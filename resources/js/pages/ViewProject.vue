<template>
  <div>
    <div ref="mainCont">
      <v-row class="my-sm-15">
        <v-col class="d-none d-sm-flex col-sm-1" />
        <v-col class="d-block d-md-flex col-12 col-sm-10">
          <!-- Skill icons -->
          <div
            class="d-block mt-16 content-pane icon-pane pa-6"
            :class="{
              'pane-dark': $vuetify.theme.dark,
              'pane-light': !$vuetify.theme.dark,
            }"
          >
            <div class="d-block mt-1 project-icon-section">
              <img
                v-for="(icon, index) in this.icons"
                :key="index"
                :src="icon"
                class="skill-icon px-1 mb-0 mb-md-4 mr-4 mr-md-0"
              />
            </div>
          </div>
          <!-- Project information -->
          <div class="d-block d-lg-flex mt-md-16">
            <!-- Headers section -->
            <div
              class="d-block px-5 pb-4 mb-md-0 content-pane about-pane"
              :class="{
                'pane-dark': $vuetify.theme.dark,
                'pane-light': !$vuetify.theme.dark,
              }"
            >
              <div class="project-headers-section">
                <div class="my-2 pt-5">
                  <h2>{{ item.title }}</h2>
                  <p class="mb-0">{{ item.subtitle }}</p>
                </div>
                <div>
                  <hr class="primary-color-bg" />
                </div>
                <div class="d-flex justify-content-around">
                  <v-carousel
                    class="carousel-wrap pt-0"
                    hide-delimiters
                    height="auto"
                  >
                    <v-carousel-item
                      v-for="(image, index) in showcase"
                      :key="index"
                    >
                      <img :src="image" ref="" class="image-wrap" />
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <div>
                  <hr class="primary-color-bg" />
                </div>
                <div v-if="item.links">
                  <v-btn
                    v-for="(link, index) in this.item.links"
                    :key="index"
                    :href="link.path"
                    :target="target(link.type)"
                    class="mr-2"
                    color="accent"
                  >
                    <v-icon class="primary-color-c" v-if="link.icon" dark
                      >fab fa-{{ link.icon }}</v-icon
                    >
                    <span class="primary-color-c" v-if="link.label"
                      >&nbsp;{{ link.label }}</span
                    >
                  </v-btn>
                </div>
              </div>
            </div>
            <!-- Description section -->
            <div
              class="d-block px-5 pb-4 mb-14 mb-md-0 content-pane description-pane"
              :class="{
                'pane-dark': $vuetify.theme.dark,
                'pane-light': !$vuetify.theme.dark,
              }"
            >
              <div class="mx-3 my-2 pt-5 project-description-section">
                <div
                  v-for="(content, index) in this.item.contents"
                  :key="index"
                  class="mb-5"
                >
                  <div
                    v-if="content.type == 'disclaimer'"
                    class="resume-main-section"
                  >
                    <hr class="primary-color-bg" />
                  </div>
                  <span
                    v-if="
                      (content.type == 'paragraph') |
                        (content.type == 'disclaimer')
                    "
                    :class="{
                      'disclaimer-text': content.type == 'disclaimer',
                    }"
                  >
                    {{ content.type == "disclaimer" ? "Disclaimer: " : "" }}
                    {{ content.content }}
                  </span>

                  <ul v-if="content.type == 'bullet'">
                    <li
                      v-for="(bullet, indexb) in content.content"
                      :key="indexb"
                    >
                      {{ bullet }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="d-none d-sm-flex col-sm-1" />
      </v-row>
    </div>
  </div>
</template>

<script>
import projectsApi from "../api/projects";
import { getThemeData } from "../plugins/custom_themes";

export default {
  name: `ViewProject`,
  props: {
    item_id: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      item: {},
      icons: {},
      photos: {},
    };
  },
  mounted() {
    this.gsap.set(this.$refs.mainCont, { opacity: 0 });
    projectsApi
      .getProjectById(this.item_id)
      .then((response) => {
        this.item = response.data;

        this.applyProjectTheme();

        this.item.contents = JSON.parse(this.item.contents);
        this.item.skills = JSON.parse(this.item.skills);
        this.item.links = JSON.parse(this.item.links);
        this.item.photos = JSON.parse(this.item.photos);

        this.photos = this.item.photos.showcase;
        this.icons = this.item.skills.icons;

        this.loadContent();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

          this.$router.push({ name: "page-not-found" });
        }
      });
  },
  computed: {
    showcase() {
      return this.photos;
    },
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
          ".project-headers-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".project-description-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".project-icon-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        );
    },
    target(type) {
      return type == "link" ? "_blank" : "";
    },
    applyProjectTheme() {
      let selectedTheme = getThemeData(this.item.display_theme);

      Object.keys(selectedTheme).forEach((i) => {
        this.$vuetify.theme.themes.dark[i] = selectedTheme[i];
        this.$vuetify.theme.themes.light[i] = selectedTheme[i];
      });

      this.$vuetify.theme.dark =
        this.item.display_theme.split("--")[1] == "dark";
    },
  },
};
</script>

<style scoped>
.image-wrap {
  border-radius: 20px;
  width: 100% !important;
  height: auto !important;
}

.carousel-wrap {
  width: 600px !important;
  height: auto !important;
}

.v-image {
  height: auto !important;
}

@media (min-width: 600px) and (max-width: 959px) {
  .icon-pane {
    width: auto;
    border-top-right-radius: 10px !important;
    border-top-left-radius: 10px !important;
  }
  .description-pane {
    border-bottom-right-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
  }
}

@media (min-width: 960px) {
  .icon-pane {
    width: 95px;
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
  }
}

@media (min-width: 960px) and (max-width: 1264px) {
  .about-pane {
    border-top-right-radius: 10px !important;
  }
  .description-pane {
    border-bottom-right-radius: 10px !important;
  }
}

@media (min-width: 1265px) {
  .about-pane {
    width: 40%;
  }
  .description-pane {
    width: auto;
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }
}
</style>