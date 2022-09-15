<template>
  <v-main>
    <v-container>
      <div v-show="important">
        <h2>{{ item.title }}</h2>
      </div>
      <br />

      <div class="d-block">
        <div class="col-12">
          <v-carousel class="carousel-wrap pt-0" hide-delimiters>
            <v-carousel-item v-for="(image, index) in showcase" :key="index">
              <img :src="image" ref="" class="image-wrap" />
            </v-carousel-item>
          </v-carousel>
        </div>

        <div class="col-12">
          <div class="d-flex justify-space-between">
            <div>
              <h2>{{ item.title }}</h2>
              <p class="mb-0">{{ item.subtitle }}</p>
            </div>
            <div class="d-flex flex-row-reverse mt-1">
              <img
                v-for="(icon, index) in this.icons"
                :key="index"
                :src="icon"
                class="skill-icon px-1"
              />
            </div>
          </div>

          <hr />

          <div>
            <div
              v-for="(content, index) in this.item.contents"
              :key="index"
              class="mb-5"
            >
              <span
                v-if="
                  (content.type == 'paragraph') | (content.type == 'disclaimer')
                "
                :class="{ 'disclaimer-text': content.type == 'disclaimer' }"
              >
                {{ content.type == "disclaimer" ? "Disclaimer: " : "" }}
                {{ content.content }}
              </span>

              <ul v-if="content.type == 'bullet'">
                <li v-for="(bullet, indexb) in content.content" :key="indexb">
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>

          <hr />
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
    </v-container>
  </v-main>
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
      important: false,
    };
  },
  created() {
    projectsApi.getProjectById(this.item_id).then((response) => {
      this.item = response.data;

      this.applyProjectTheme();

      this.item.contents = JSON.parse(this.item.contents);
      this.item.skills = JSON.parse(this.item.skills);
      this.item.links = JSON.parse(this.item.links);
      this.item.photos = JSON.parse(this.item.photos);

      this.photos = this.item.photos.showcase;
      this.icons = this.item.skills.icons;

      this.init();
    });
  },
  computed: {
    showcase() {
      return this.photos;
    },
  },
  mounted() {},
  methods: {
    init() {
      this.gsap.fromTo(
        ".image",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 1.5 }
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