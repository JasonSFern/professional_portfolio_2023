<template>
  <v-main>
    <v-container>
    <br/>
      <div class="d-block d-md-flex">
        <div class="col-12 col-md-5 pl-0 glossy image">
          <div ref="imageButton">
            <v-btn
              fab
              dark
              outline
              color="accent"
              v-on:click="getRightPic"
              class="image-refresh"
            >
              <v-icon dark>mdi-eye-refresh</v-icon>
            </v-btn>
          </div>
          <div ref="imageSliderCont" >
            <div ref="imageSlider" >
              <vue-compare-image
                class="image-wrap"
                hover
                :style="{ maxWidth: '500px' }"
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
          <hr/>
          <p>I am a Calgary based full stack web developer and graphic designer. Coming from a more design oriented background, I have since been captivated by the world of programming when I started to learn web development. I enjoy the creativity that can be realized through coding.</p>
          <p>I have a passion for front-end development. I believe that delivering a great UX is dependant on understanding what users need and value in order to keep them engaged while growing your brand and supporting business objectives. Often times simplicity is of more value to the end user over complexity.</p>
          <p>If you have any projects you wish to collaborate on or are an employer who wishes to work with me you can contact me by filling out the form <router-link class="accent-color-c" to="/contact"><strong>here</strong></router-link>, or by connecting with me on LinkedIn.</p>

          <hr/>

          <v-btn
            v-for="link in externalLinks"
            :key="link.icon"
            fab
            dark
            outline
            color="accent"
            :href="link.href"
            target="_blank"
            class="mr-4"
          >
            <v-icon dark>{{link.icon}}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import VueCompareImage from 'vue-compare-image';
import { VueTyper } from 'vue-typer';

export default {
  name: `AboutMe`,
  components: {
    VueCompareImage,
    VueTyper,
  },
  mounted() {
    this.getRightPic()
  
    this.gsap.timeline()
      .fromTo(this.$refs.imageSliderCont, {xPercent:-20}, {duration: 1, xPercent:0})
      .fromTo(this.$refs.imageSlider, {xPercent:-20, opacity: 0}, {duration: 1, opacity: 1, xPercent: 0}, ">")
      .fromTo(this.$refs.imageButton, { opacity: 0}, {duration: .5, opacity: 1,})
      .fromTo('.image-refresh', { opacity: 0}, {duration: .5, opacity: 1,}, ">")
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
          href: "https://www.linkedin.com/in/jsfernandes83/",
          icon: "mdi-linkedin"
        },
        {
          href: "https://github.com/JasonSFern",
          icon: "mdi-github"
        },
      ],
    };
  },
  methods: {
    getRightPic() {
      this.rightImageIndex ++

      if (this.rightImageIndex >= this.effectImages.length) {
        this.rightImageIndex = 0
      }

      this.rightImage = this.effectImages[this.rightImageIndex]
    }
  }
};
</script>

<style scoped>

@media (min-width: 1263px) {
  .image-refresh {
    position: absolute;
    right: 86%;
    top: 3%;
    z-index:4;
  }
}

@media (max-width: 1262px) {
  .image-refresh {
    position: absolute;
    right: 81%;
    top: 4%;
    z-index:4;
  }
}

@media (max-width: 959px) {
  .image-refresh {
    position: absolute;
    right:90%;
    top: 3%;
    z-index:4;
  }
}

@media (max-width: 764px) {
  .image-refresh {
    position: absolute;
    right:87%;
    top: 3%;
    z-index:4;
  }
}

</style>