<template>
  <v-content>
    <!-- <v-container align-center> -->
    <!-- <image-parallax></image-parallax> -->
    <!-- <scroll-skew></scroll-skew> -->
    <!-- <warp-speed-a></warp-speed-a> -->
    <!-- <warp-speed-b></warp-speed-b> -->
    <!-- <h1 class="header-section">Animations Test</h1>
      <div ref="logo" class="logo circle">Clean Juice</div> -->

    <!-- <div class="juice square">
        <img src="img/juice.png" alt="">
      </div> -->

    <!-- <img id="ball1" src="img/fig1.jpg" style="width:100px;" alt="">
      <img id="ball2" src="img/parks1.jpg" style="width:100px;" alt="">
      <img id="ball3" src="img/sage1.jpg" style="width:100px;" alt="">

      <div ref="gallery" class="gallery">
        <img src="https://assets.codepen.io/32887/beach-gallery-cabanas.jpg" />
        <img ref="clipped" class="clipped" src="https://assets.codepen.io/32887/beach-gallery-cabanas.jpg" />
        <div ref="dragger" class="dragger"></div>
      </div> -->
    <!-- </v-container> -->
  </v-content>
</template>

<script>
import ImageParallax from "../components/Effects/ImageParallax.vue";
import ScrollSkew from "../components/Scroll/ScrollSkew.vue";
import WarpSpeedA from "../components/Effects/WarpSpeedA.vue";
import WarpSpeedB from "../components/Effects/WarpSpeedB.vue";

export default {
  name: `BetaTesting`,
  components: {
    ImageParallax,
    ScrollSkew,
    WarpSpeedA,
    WarpSpeedB,
  },
  mounted() {
    this.gsap.fromTo(
      ".circle",
      { opacity: 0 },
      { opacity: 1, x: 500, duration: 2 }
    );
    // this.gsap.to('.circle', {xPercent:30, duration: 3})
    this.gsap.from(".square", { duration: 4, scale: 2 });

    // this.gsap.to('#ball1', {x:1000, ease:"bounce.in", duration: 3})
    // this.gsap.to('#ball2', {x:1000, ease:"bounce.out", duration: 3, delay:3 })
    // this.gsap.to('#ball3', {x:1000, ease:"bounce.inOut", duration: 3, delay:6 })
    // When animating positional properties, such as left and top, the elements you’re animating must have a CSS position value of absolute, relative, or fixed.

    this.gsap
      .timeline()
      .to("#ball1", { x: 1000, ease: "bounce.in", duration: 4 })
      .to("#ball2", { x: 1000, ease: "bounce.out", duration: 4 }, "-=2")
      .to("#ball3", { x: 1000, ease: "bounce.inOut", duration: 4 });

    // const gallery = this.$refs.gallery
    // const dragger = this.$refs.dragger
    // const clipped = this.$refs.clipped
    // const self = this

    // this.gsap.to(gallery, { autoAlpha: 1 });
    // this.gsap.set(dragger, { x: 320 });

    // this.gsap.to(".logo", 1, {
    //   opacity: 0,
    //   x: -20,
    //   ease: Expo.easeInOut
    // })

    // Draggable.create(self.$refs.dragger, {
    //   type: "x",
    //   bounds: self.$refs.gallery,
    //   onDrag: function () {
    //     let x = 640 - self.gsap.getProperty(this.target, "x");
    //     self.gsap.set(self.$refs.clipped, {clipPath: `inset(0px ${x}px 0px 0px)`});
    //     // line above using template literals is same as
    //     // gsap.set(".clipped", {clipPath: "inset(0px " + x + "px 0px 0px)"});
    //   }
    // });
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style scoped>
.logo {
  font-size: 40px;
}

.gallery {
  width: 640px;
  height: 480px;
  visibility: hidden;
}

.gallery img {
  width: 640px;
  height: 480px;
  position: absolute;
}

.dragger {
  width: 10px;
  height: 480px;
  background: red;
  opacity: 0.5;
  position: absolute;
}

.clipped {
  filter: saturate(0) contrast(1.5);
  clip-path: inset(0px 320px 0px 0px);
}

/* //////// */

body {
  height: 300vh;
  background-color: #111;
  color: white;
  overflow-x: hidden;
}

h1,
h2 {
  font-weight: 400;
  max-width: none;
}
</style>