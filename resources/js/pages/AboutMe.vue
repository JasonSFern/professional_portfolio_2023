<template>
  <v-main>
    <v-container>
      <br />
      <div class="d-block d-md-flex">
        <div class="col-12 col-md-5 pl-0 glossy image">
          <div ref="imageButton">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  fab
                  dark
                  color="accent"
                  v-bind="attrs"
                  v-on="on"
                  v-on:click="getRightPic"
                  class="image-refresh"
                >
                  <v-icon dark>mdi-eye-refresh</v-icon>
                </v-btn>
              </template>
              <span>Cycle Image</span>
            </v-tooltip>
          </div>
          <div ref="imageSliderCont">
            <div class="compare-image-wrap" ref="imageSlider">
              <vue-compare-image
                class="image-wrap-about"
                hover
                :sliderLineWidth="sliderLine"
                :handleSize="handleSize"
                :leftImage="leftImage"
                :rightImage="rightImage"
                :sliderPositionPercentage="sliderPosition"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7">
          <h2>
            <span>About</span>
            <span class="accent-color-c">Me</span>
          </h2>
          <p>Jason Fernandes</p>
          <hr />
          <p>
            I am a Canadian full stack web developer and graphic designer based
            in Calgary, AB. Coming from a more design oriented background, I
            have since been captivated by the world of programming when I
            started to learn web development. I enjoy the creativity that can be
            realized through coding.
          </p>
          <p>
            I have a passion for front-end development and believe that
            delivering a great UX is all about understanding what users need and
            value in order to keep them engaged through rich branding while
            supporting business objectives. Often times simplicity is of more
            value to the end user over complexity.
          </p>
          <p>
            If you have any projects you wish to collaborate on or are an
            employer who wishes to work with me you can contact me by filling
            out the form
            <router-link class="accent-color-c" to="/contact"
              ><strong>here</strong></router-link
            >, or by connecting with me on LinkedIn.
          </p>
          <br />
          <p class="disclaimer-text">
            Disclaimer: All of the images, artwork, text and graphics contained
            in this portfolio, unless otherwise specified and/or credited, are
            the copyright of Jason Fernandes. All rights reserved. All other
            materials are the copyright and/or trademark of the respective
            owners. All materials featured are offered for informative purposes
            only and as such are offered on a 'as is' basis.
          </p>
          <hr />

          <v-tooltip v-for="link in externalLinks" :key="link.icon" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                fab
                dark
                color="accent"
                :href="link.href"
                target="_blank"
                class="mr-4"
              >
                <v-icon dark>{{ link.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ link.label }}</span>
          </v-tooltip>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import VueCompareImage from "vue-compare-image";
import { VueTyper } from "vue-typer";

export default {
  name: `AboutMe`,
  components: {
    VueCompareImage,
    VueTyper,
  },
  mounted() {
    this.getRightPic();

    this.gsap
      .timeline()
      .fromTo(
        this.$refs.imageSliderCont,
        { xPercent: -20 },
        { duration: 1, xPercent: 0 }
      )
      .fromTo(
        this.$refs.imageSlider,
        { xPercent: -20, opacity: 0 },
        { duration: 1, opacity: 1, xPercent: 0 },
        ">"
      )
      .fromTo(
        this.$refs.imageButton,
        { opacity: 0 },
        { duration: 0.5, opacity: 1 }
      )
      .fromTo(
        ".image-refresh",
        { opacity: 0 },
        { duration: 0.5, opacity: 1 },
        ">"
      );
  },
  data() {
    return {
      leftImage: "img/about/self_final.png",
      rightImage: "",
      rightImageIndex: 0,
      sliderLine: 2,
      handleSize: 0,
      sliderPosition: 0.5,
      effectImages: [
        "img/about/self_pixel_explosion.png",
        "img/about/self_glitch.png",
        "img/about/self_triangle_glow.png",
        "img/about/self_dripping.png",
      ],
      externalLinks: [
        {
          href: "https://drive.google.com/file/d/1yaWP4JcBuoBX9ZkcdBM3MkP4SqhpHIBg/view?usp=sharing",
          icon: "mdi-file-pdf-box",
          label: "Resume",
        },
        {
          href: "https://www.linkedin.com/in/jsfernandes83/",
          icon: "mdi-linkedin",
          label: "LinkedIn",
        },
        {
          href: "https://github.com/JasonSFern",
          icon: "mdi-github",
          label: "GitHub",
        },
      ],
    };
  },
  methods: {
    getRightPic() {
      this.rightImageIndex++;

      if (this.rightImageIndex >= this.effectImages.length) {
        this.rightImageIndex = 0;
      }

      this.rightImage = this.effectImages[this.rightImageIndex];
    },
  },
};
</script>

<style scoped>
@media (min-width: 1263px) {
  .image-refresh {
    position: absolute;
    right: 72%;
    top: 3%;
    z-index: 4;
  }
}

@media (max-width: 1262px) {
  .image-refresh {
    position: absolute;
    right: 81%;
    top: 4%;
    z-index: 4;
  }
}

@media (max-width: 959px) {
  .image-refresh {
    position: absolute;
    right: 67%;
    top: 3%;
    z-index: 4;
  }
}

@media (max-width: 764px) {
  .image-refresh {
    position: absolute;
    right: 73%;
    top: 3%;
    z-index: 4;
  }
}
</style>
