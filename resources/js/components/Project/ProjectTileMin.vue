<template>
  <div v-show="isLoaded">
    <!-- Add :class="theme" for future theme addtions for backgrounds -->
    <section v-show="!hidden" class="d-flex justify-content-center">
      <div class="d-flex justify-content-around">
        <div
          class="project-wrap mx-6 mx-sm-0 rounded-xl d-block"
          v-on:click="viewProject(item.project_code)"
          :style="{ background: themeCssStyles.linear_gradient }"
        >
          <div class="per-title">
            <h1
              class="pertext"
              :style="{
                'text-shadow': themeCssStyles.text_shadow,
                color: themeCssStyles.color,
              }"
            >
              {{ item.title }}
            </h1>
          </div>
          <div class="per-holder d-flex justify-content-center perholder1 mb-1">
            <img class="per-image perimage1" :src="item.photos.titlecard" />
          </div>
          <div
            class="per-holder per-card-holder rounded-lg d-flex justify-content-center perholder2"
          >
            <div class="per-card rounded-lg perimage2">
              <div class="d-flex justify-content-center">
                <p class="persubtext" :style="{ color: themeCssStyles.color }">
                  {{ item.subtitle }}
                </p>
              </div>
              <div class="d-flex justify-content-center align-end">
                <img
                  v-for="(skill, index) in item.skills.icons"
                  :key="index"
                  class="skill-icon px-1"
                  :src="skill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getThemeData } from "../../plugins/custom_themes";

export default {
  name: "ProjectTileMin",
  props: {
    item: Object,
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isLoaded: function (vNew, vOld) {
      if (vNew == true) {
        this.hidden = false;

        this.gsap
          .timeline()
          .fromTo(
            ".project-wrap",
            { opacity: 0 },
            { duration: 0.5, opacity: 1 }
          )
          .fromTo(
            ".perholder1",
            { yPercent: -100 },
            { duration: 0.5, yPercent: 0 }
          )
          .fromTo(
            ".perimage1",
            { yPercent: -100 },
            { duration: 0.5, yPercent: 0 },
            ">"
          )
          .fromTo(".pertext", { opacity: 0 }, { duration: 0.5, opacity: 1 })
          .fromTo(
            ".perholder2",
            { yPercent: -100 },
            { duration: 0.5, yPercent: 0 }
          )
          .fromTo(
            ".perimage2",
            { yPercent: -100 },
            { duration: 0.5, yPercent: 0 }
          )
          .fromTo(".persubtext", { opacity: 0 }, { duration: 0.5, opacity: 1 });
      }
    },
  },
  data: function () {
    return {
      rotX: 0,
      rotY: 0,
      hidden: true,
      themeColors: {},
    };
  },
  computed: {
    themeCssStyles() {
      let linearGradient = `linear-gradient(to bottom right,  ${this.themeColors.gradient1}, ${this.themeColors.gradient6},  ${this.themeColors.gradient12})`;
      let textShadow = `-1px 1px 1px ${this.themeColors.accent}, 1px 1px 1px ${this.themeColors.accent}, 1px -1px 0 ${this.themeColors.accent}, -1px -1px 0 ${this.themeColors.accent}`;
      let color = this.themeColors.primary;
      return {
        text_shadow: textShadow,
        linear_gradient: linearGradient,
        color: color,
      };
    },
    themeType() {
      return this.item.display_theme.split("--")[1];
    },
  },
  mounted() {
    this.themeColors = getThemeData(this.item.display_theme);
  },
  methods: {
    viewProject(item_id) {
      this.$router.push({
        name: "viewproject",
        params: {
          item_id: item_id,
          type: 1,
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@900&family=Montserrat:wght@900&family=Syncopate:wght@700&display=swap");

section {
  margin-top: 10px !important;
}

.project-wrap {
  max-width: 350px;
  max-height: 550px;
  padding: 25px 0;
  margin: 40px 0;
}

.per-holder {
  overflow: hidden;
}

.per-image {
  width: 100%;
  max-width: 350px;
  filter: brightness(70%);
}

.per-title {
  height: 50px;
}

.per-title h1 {
  text-align: center;
  font-size: 25px;
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
}

.per-card {
  padding: 20px;
  height: 110px;
}

.per-card p {
  text-align: center;
  text-transform: uppercase;
  font-family: "Wix Madefor Display", sans-serif;
  font-size: 15px;
}
</style>