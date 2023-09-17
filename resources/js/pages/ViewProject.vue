<template>
  <div>
    <div ref="mainCont">
      <v-row class="my-sm-12">
        <v-col class="d-none d-sm-flex col-sm-1 col-lg-3" />
        <v-col class="col-12 col-sm-10 col-lg-6">
          <div class="mt-sm-12 resume-pane">
            <div
              class="d-block px-5 pb-4 mb-14 mb-md-0 content-pane resume-pane-int w-100 pt-16"
            >
              <div class="project-headers-section pt-16 pt-lg-0">
                <div class="per-title per-title-back">
                  <h1 class="pertext">{{ item.title }}</h1>
                </div>
                <div style="">
                  <h6 class="text-center">
                    {{ item.subtitle }}
                  </h6>
                </div>
              </div>
              <div class="py-10" />
              <carousel
                class="project-photos-section"
                :per-page="1"
                :mouse-drag="false"
                :centerMode="true"
                :paginationActiveColor="accentColour"
              >
                <slide v-for="(image, index) in showcase" :key="index">
                  <div class="d-flex justify-center">
                    <img
                      :src="image"
                      ref=""
                      :style="photoStyles"
                      class="image-wrap"
                    />
                  </div>
                </slide>
              </carousel>
              <div class="py-10" />
              <div ref="descriptionSection" class="project-description-section">
                <div
                  v-for="(content, index) in this.item.contents"
                  :key="index"
                  class="mb-5"
                >
                  <!-- Content - header -->
                  <div v-if="content.type == 'header'" class="pt-10 pb-5">
                    <h3 class="text-center">
                      <span
                        v-for="(c, indexr) in content.content"
                        :key="indexr"
                        :class="c.class"
                        class="text-left text-uppercase w-100"
                      >
                        {{ c.text }}
                      </span>
                    </h3>
                  </div>

                  <!-- Content - paragraph -->
                  <div
                    v-if="
                      (content.type == 'paragraph') |
                        (content.type == 'disclaimer')
                    "
                  >
                    <div v-if="content.type == 'disclaimer'">
                      <hr class="primary-color-bg" />
                    </div>

                    <p
                      class="primary-color-c"
                      :class="{
                        'disclaimer-text': content.type == 'disclaimer',
                      }"
                    >
                      {{ content.type == "disclaimer" ? "Disclaimer: " : "" }}
                      {{ content.content }}
                    </p>
                  </div>

                  <!-- Content - bullets -->
                  <div v-if="content.type == 'bullet'" class="">
                    <ul>
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
              <div class="py-10" />
              <div
                v-if="item.links"
                class="d-flex justify-center project-links-section"
              >
                <v-btn
                  v-for="(link, index) in this.item.links"
                  :key="index"
                  :href="link.path"
                  :target="target(link.type)"
                  class="mr-2"
                  color="accent"
                  x-large
                >
                  <v-icon class="primary-color-c" v-if="link.icon" dark
                    >fab fa-{{ link.icon }}</v-icon
                  >
                  <span class="primary-color-c" v-if="link.label"
                    >&nbsp;{{ link.label }}</span
                  >
                </v-btn>
              </div>
              <!-- <div class="pt-16">
                <div style="">
                  <h6 class="text-center pb-8">Skills Used:</h6>
                </div>

                <div class="d-flex justify-center mt-2 project-icon-section">
                  <img
                    v-for="(icon, index) in this.icons"
                    :key="index"
                    :src="icon"
                    class="skill-icon px-1 mb-0 mb-md-4 mr-4 mr-md-0"
                  />
                </div>
              </div> -->
            </div>
          </div>
        </v-col>
        <v-col class="d-none d-sm-flex col-sm-1 col-lg-3" />
      </v-row>
    </div>
  </div>
</template>

<script>
import projectsApi from "../api/projects";
import { getThemeData } from "../plugins/custom_themes";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: `ViewProject`,
  components: {
    Carousel,
    Slide,
  },
  props: {
    item_id: {
      required: true,
      type: String,
    },
  },
  computed: {
    showcase() {
      return this.photos;
    },
  },
  data() {
    return {
      item: {},
      icons: {},
      photos: {},
      photoStyles: {},
      accentColour: "#ff9800",
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onWindowResize);
    });
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
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    loadContent() {
      this.onWindowResize();
      this.getAccentColour();
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
          ".project-photos-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".project-description-section",
          { opacity: 0 },
          { duration: 0.5, opacity: 1 }
        )
        .fromTo(
          ".project-links-section",
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
    onWindowResize() {
      let object = {};
      let width = this.$refs.descriptionSection.clientWidth;

      object.width = width >= 600 ? "600px" : `${width}px`;
      this.photoStyles = object;
    },
    getAccentColour() {
      this.accentColour = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--v-accent-base");
    },
  },
};
</script>

<style scoped>
.image-wrap {
  border-radius: 20px;
}

.per-title h1 {
  text-shadow: -1px 1px 2px var(--v-accent-base),
    1px 1px 2px var(--v-accent-base), 1px -1px 0 var(--v-accent-base),
    -1px -1px 0 var(--v-accent-base);
  text-align: center;
  color: var(--v-primary-base);
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
}

@media (max-width: 520px) {
  .per-title h1 {
    font-size: 60px !important;
  }
}
@media (min-width: 521px) {
  .per-title h1 {
    font-size: 100px !important;
  }
}
</style>