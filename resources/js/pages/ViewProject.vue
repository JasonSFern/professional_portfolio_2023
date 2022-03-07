<template>
  <v-main>
    <v-container>
      <div v-show="important">
        <h2>{{ item.title }}</h2>
      </div>
      <br/>
      <div class="d-block d-md-flex">
        <div class="col-12 col-md-5 pl-0 glossy image">
            <img v-for="(image, index) in showcase" :key="index" :src="image" ref="" class="image pb-2 image-wrap" style="width:inherit;"/>
        </div>
        <div class="col-12 col-md-7">
          <h2>{{ item.title }}</h2>
          <p>{{ item.subtitle }}</p>
          <div class="d-flex">
            <div class="d-flex flex-row-reverse">
              <img v-for="(icon, index) in this.item.skills.icons" :key="index" :src="icon" class="skill-icon px-1"/>
            </div>
          </div>
          <hr/>
          <p style="white-space: pre-wrap;">{{ item.description }}</p>
          <div v-if="item.links">
            <hr/>
            <v-btn :href="item.links.route" color="accent">Launch</v-btn>
            <v-btn :href="item.links.github" color="accent" target="_blank" class="ml-2">
              <v-icon dark>fab fa-github</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import projectsApi from '../api/projects'
import CustomThemes from '../plugins/custom_themes';

export default {
  name: `ViewProject`,
  props: {
    item_id: { 
      required: true,
      type: Number
    }
  },
  data() {
    return {
      item: {},
      photos: {},
      important: false
    }
  },
  created() {
      projectsApi.getProjectById(this.item_id).then(response => {
        this.item = response.data
        this.setCustomTheme(this.item.display_theme)

        var photos = JSON.parse(this.item.photos)
        var skills = JSON.parse(this.item.skills)
        var links = JSON.parse(this.item.links)
        this.item.photos = photos
        this.item.skills = skills
        this.item.links = links
        this.photos = photos.showcase

        this.init()
      })
  },
  computed: {
    showcase() {
      return this.photos
    }
  },
  mounted() {
  },
  methods: {
    init() {
      this.gsap.fromTo('.image',{opacity:0 }, {opacity: 1, duration: 2, delay: 1.5 });
    },
    setCustomTheme(themeName) {
      let selectedTheme = CustomThemes[themeName]
      let dark = selectedTheme.dark;
      let light = selectedTheme.light

      Object.keys(dark).forEach(i => {
        this.$vuetify.theme.themes.dark[i] = dark[i];
      });
      Object.keys(light).forEach(i => {
        this.$vuetify.theme.themes.light[i] = light[i];
      });
    }
  }
};
</script>
