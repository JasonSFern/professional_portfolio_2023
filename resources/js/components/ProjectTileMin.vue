<template>
  <div v-show="isLoaded">
    <!-- Add :class="theme" for future theme addtions for backgrounds -->
    <section v-show="!hidden" class="d-flex justify-content-center">
      <div
        class="project-wrap rounded-xl d-block"
        v-on:click="viewProject(item.id)"
        :style="mainCardStyle"
      >
        <div class="per-title per-title-m">
          <h1 class="pertext" :style="headTextStyle">{{ item.title }}</h1>
        </div>
        <div
          class="per-holder rounded-xl d-flex justify-content-center perholder1 mb-1"
        >
          <img
            class="per-image-m rounded-lg perimage1"
            :src="item.photos.titlecard"
          />
        </div>
        <div
          class="per-holder per-card-holder rounded-lg d-flex justify-content-center perholder2"
        >
          <div class="per-card rounded-lg perimage2">
            <div style="height: 40%" class="d-flex justify-content-center">
              <p
                class="persubtext"
                :class="{
                  'text-dark': themeType !== 'dark',
                  'text-white': themeType == 'dark',
                }"
              >
                {{ item.subtitle }}
              </p>
            </div>
            <div
              style="height: 60%"
              class="d-flex justify-content-center align-end"
            >
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
    </section>
  </div>
</template>

<script>
import { getThemeData } from "../plugins/custom_themes";

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
    mainCardStyle() {
      let string = `linear-gradient(to bottom right,  ${this.themeColors.gradient1}, ${this.themeColors.gradient2},  ${this.themeColors.gradient3})`;
      return {
        background: string,
      };
    },
    headTextStyle() {
      let string = `0px 0px 6px ${this.themeColors.accent}`;
      return {
        "text-shadow": string,
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
  width: 80%;
  margin: 40px 10%;
  padding: 25px 0;
  height: 500px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 3px 4px 37px -7px rgba(0, 0, 0, 0.41);
  box-shadow: 3px 4px 37px -7px rgba(0, 0, 0, 0.41);
}

.per-holder {
  overflow: hidden;
}

.per-image-m {
  width: 300px;
  filter: brightness(70%);
}

.per-title {
  height: 50px;
}

.per-title h1 {
  text-shadow: 0px 0px 6px var(--v-accent-base);
  text-align: center;
  color: #d9ebfe;
  font-size: 22px;
  font-family: "Syncopate", sans-serif;
  text-transform: uppercase;
}

.per-card {
  padding: 20px;
  width: 300px;
  height: 110px;
  backdrop-filter: blur(5px);
}

.per-card p {
  text-transform: uppercase;
  font-family: "Exo", sans-serif;
  font-size: 15px;
}
</style>