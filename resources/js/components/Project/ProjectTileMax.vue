<template>
  <!-- Add :class="theme" for future theme addtions for backgrounds -->
  <section
    v-show="!hidden"
    class="fullpage"
    @mousemove="mouseMoved"
    :title="item.title"
  >
    <div
      class="d-flex per-container"
      v-on:click="viewProject(item.project_code)"
      :style="rotation"
    >
      <div class="per-holder per-image rounded-xl perholder1">
        <img class="rounded-xl perimage1" :src="item.photos.titlecard" />
      </div>
      <div
        class="per-title per-title-front"
        :class="{
          'per-title-single': item.title.split(' ').length == 1,
          'per-title-double': item.title.split(' ').length >= 2,
        }"
      >
        <h1 class="pertext">{{ item.title }}</h1>
      </div>
      <div
        class="per-title per-title-back"
        :class="{
          'per-title-single': item.title.split(' ').length == 1,
          'per-title-double': item.title.split(' ').length >= 2,
        }"
      >
        <h1 class="pertext">{{ item.title }}</h1>
      </div>
      <div class="per-holder per-card-holder-front rounded-lg perholder2">
        <div
          class="per-card rounded-lg perimage2"
          :class="{
            'per-card-dark': !$vuetify.theme.dark,
            'per-card-light': $vuetify.theme.dark,
          }"
        >
          <div style="height: 40%">
            <p
              class="text-center persubtext accent-color-bg rounded-lg px-3 py-1"
            >
              {{ item.subtitle }}
            </p>
          </div>
          <div style="height: 60%" class="d-flex justify-content-center">
            <img
              v-for="(skill, index) in item.skills.icons"
              :key="index"
              class="mt-6 skill-icon px-1"
              :src="skill"
            />
          </div>
        </div>
      </div>
      <div class="per-holder per-card-holder-middle rounded-lg perholder2">
        <div
          class="per-card rounded-lg perimage2"
          :class="{
            'per-card-dark': !$vuetify.theme.dark,
            'per-card-light': $vuetify.theme.dark,
          }"
        ></div>
      </div>
      <div class="per-holder per-card-holder-back rounded-lg perholder2">
        <div
          class="per-card rounded-lg perimage2"
          :class="{
            'per-card-dark': !$vuetify.theme.dark,
            'per-card-light': $vuetify.theme.dark,
          }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
const maxRotationDegrees = 40;

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Wix+Madefor+Display:wght@800");

.fullpage {
  padding-top: 30vh;
  background-color: transparent;
}

.per-container {
  position: relative;
  transform-origin: 50%;
  transform-style: preserve-3d;
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

.per-title {
  position: absolute;
  word-wrap: normal;
}

.per-title-front {
  transform: translateZ(50px);
}
.per-title-back {
  transform: translateZ(45px);
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

.per-title-double {
  top: 50px;
}

.per-title-single {
  top: 115px;
}

.per-card-holder-front {
  transform: translateZ(80px);
  position: absolute;
  bottom: -40px;
}
.per-card-holder-middle {
  transform: translateZ(60px);
  position: absolute;
  bottom: -40px;
}
.per-card-holder-back {
  transform: translateZ(40px);
  position: absolute;
  bottom: -40px;
}

.per-card {
  padding: 20px;
  height: 150px;
  backdrop-filter: blur(5px);
}

.per-card p {
  text-transform: uppercase;
  font-family: "Wix Madefor Display", sans-serif;
}

.per-card-light {
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.3);
  border: solid 1px rgba(56, 56, 56, 0.1);
}

.per-card-dark {
  box-shadow: inset 0 0 2000px rgba(56, 56, 56, 0.3);
  border: solid 1px rgba(255, 255, 255, 0.1);
}

@media (min-width: 950px) {
  .per-title {
    width: 700px;
  }
  .per-title h1 {
    font-size: 100px;
  }
  .per-card {
    width: 300px;
  }

  .per-image img {
    width: 400px;
    border: solid 1px rgba(29, 29, 29, 0.4);
    filter: brightness(70%);
  }
}

@media (max-width: 949px) {
  .per-title {
    width: 380px;
  }
  .per-title h1 {
    font-size: 50px;
  }

  .per-card {
    width: 250px;
  }

  .per-image img {
    width: 335px;
    filter: brightness(70%);
  }
}
</style>