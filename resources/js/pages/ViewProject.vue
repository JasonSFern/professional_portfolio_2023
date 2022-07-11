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
                v-for="(icon, index) in this.item.skills.icons"
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
import CustomThemes from "../plugins/custom_themes";

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
      photos: {},
      important: false,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
  created() {
    projectsApi.getProjectById(this.item_id).then((response) => {
      this.item = response.data;

      let theme = this.item.display_theme.split("--");
      this.setCustomTheme(theme[0], theme[1]);

      var contents = JSON.parse(this.item.contents);
      var photos = JSON.parse(this.item.photos);
      var skills = JSON.parse(this.item.skills);
      var links = JSON.parse(this.item.links);
      this.item.contents = contents;
      this.item.photos = photos;
      this.item.skills = skills;
      this.item.links = links;
      this.photos = photos.showcase;

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
    setCustomTheme(themeName, themeStyle) {
      let selectedTheme = CustomThemes[themeName][themeStyle];

      Object.keys(selectedTheme).forEach((i) => {
        this.$vuetify.theme.themes.dark[i] = selectedTheme[i];
        this.$vuetify.theme.themes.light[i] = selectedTheme[i];
      });

      this.$vuetify.theme.dark = themeStyle == "dark";
    },
  },
};
</script>
