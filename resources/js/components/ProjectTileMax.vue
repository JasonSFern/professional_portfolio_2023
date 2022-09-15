<template>
  <!-- Add :class="theme" for future theme addtions for backgrounds -->
  <section
    v-show="!hidden"
    class="fullpage fullpage-padding gradient-color-bg"
    @mousemove="mouseMoved"
  >
    <div
      class="d-flex per-container per-center"
      v-on:click="viewProject(item.id)"
      :style="rotation"
    >
      <div class="per-holder per-image rounded-xl perholder1">
        <img
          class="per-image-d rounded-xl perimage1"
          :src="item.photos.titlecard"
        />
      </div>
      <div class="per-title per-title-d">
        <h1 class="pertext">{{ item.title }}</h1>
      </div>
      <div class="per-holder per-card-holder rounded-xl perholder2">
        <div
          class="per-card rounded-xl perimage2"
          :class="{
            'per-card-dark': !$vuetify.theme.dark,
            'per-card-light': $vuetify.theme.dark,
          }"
        >
          <div style="height: 40%">
            <p class="persubtext">{{ item.subtitle }}</p>
          </div>
          <div style="height: 60%" class="d-flex flex-row-reverse align-end">
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
</template>

<script>
const maxRotationDegrees = 20;

export default {
  name: "ProjectTileMax",
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
      special_bg: false,
    };
  },
  computed: {
    rotation() {
      return {
        transform: `perspective(1000px) rotateY(${this.rotX}deg) rotateX(${this.rotY}deg)`,
      };
    },
    // theme() {
    //   if (this.special_bg) {
    //     return `theme-bg-${this.item.display_theme}`;
    //   }
    //   return "gradient-color-bg";
    // },
  },
  mounted() {},
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
    mouseMoved(e) {
      // This gives us a number between -1 and 1
      const mousePercX = (e.pageX / document.body.clientWidth) * 2 - 1;
      const mousePercY = (e.pageY / document.body.clientHeight) * 2 - 1;

      this.gsap.to(this, 0.5, {
        rotX: mousePercX * maxRotationDegrees,
        // rotY: mousePercY * -maxRotationDegrees
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@900&family=Montserrat:wght@900&family=Syncopate:wght@700&display=swap");

.fullpage-padding {
  padding-top: 30vh;
}

.per-container {
  position: relative;
  transform-origin: 50%;
  transform-style: preserve-3d;
}

.per-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.per-holder {
  overflow: hidden;
}

.per-image {
  transform: translateZ(-100px);
}

.per-image-d {
  width: 400px;
  border: solid 1px rgba(29, 29, 29, 0.4);
  filter: brightness(70%);
}

.per-image-m {
  width: 300px;
  filter: brightness(70%);
}

.per-title {
  position: absolute;
  word-wrap: normal;
}

.per-title h1 {
  text-shadow: 0px 0px 6px var(--v-accent-base);
  text-align: center;
  color: #d9ebfe;
  font-size: 40px;
  font-family: "Syncopate", sans-serif;
  text-transform: uppercase;
}

.per-title-d {
  transform: translateZ(20px);
  top: 115px;
  width: 650px;
}

.per-title-d h1 {
  font-size: 65px !important;
}

.per-title-m {
  top: 60px;
  width: 450px;
}

.per-card-holder {
  transform: translateZ(100px);
  position: absolute;
  bottom: -40px;
}

.per-card {
  padding: 20px;
  width: 300px;
  height: 150px;
  backdrop-filter: blur(5px);
}

.per-card p {
  text-transform: uppercase;
  font-family: "Exo", sans-serif;
}

.per-card-light {
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.7);
  border: solid 1px rgba(56, 56, 56, 0.1);
}

.per-card-light p {
  text-shadow: 0px 0px 3px black;
}

.per-card-dark {
  box-shadow: inset 0 0 2000px rgba(56, 56, 56, 0.9);
  border: solid 1px rgba(255, 255, 255, 0.1);
}

.per-card-m {
  background-color: var(--v-accent-base);
}
</style>