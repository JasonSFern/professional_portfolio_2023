<template>
  <section class="comparisonSection">
    <div class="comparisonImage beforeImage">
      <img src="https://assets.codepen.io/16327/before.jpg" alt="before">
    </div>
    <div class="comparisonImage afterImage">
      <img src="https://assets.codepen.io/16327/after.jpg" alt="after">
    </div>
    <div class="comparisonImage after2Image">
      <img src="https://cdn.pixabay.com/photo/2018/10/24/05/14/kittycat-3769569_960_720.jpg" alt="after2">
    </div>
    <div class="comparisonImage after3Image">
      <img src="https://assets.codepen.io/16327/before.jpg" alt="after3">
    </div>
      <div class="comparisonImage after5Image">
      <img src="https://assets.codepen.io/16327/after.jpg" alt="after5">
    </div>
  </section>
</template>

<script>

export default {
  name: `ImageParallax`,
  mounted() {
    this.gsap.utils.toArray(".comparisonSection").forEach(section => {
      let tl = this.gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "center center",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + section.offsetWidth, 
            scrub: true,
            pin: true,
            anticipatePin: 1
          },
          defaults: {ease: "none"}
        });
      // animate the container one way...
      tl
        .fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
        // ...and the image the opposite way (at the same time)
        .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
        .fromTo(section.querySelector(".after2Image"), { xPercent: 100, x: 0}, {xPercent: 0}, 1)
        .fromTo(section.querySelector(".after2Image img"), {xPercent: -100, x: 0}, {xPercent: 0}, 1)
        .fromTo(section.querySelector(".after3Image"), { xPercent: 100, x: 0}, {xPercent: 0}, 2)
        .fromTo(section.querySelector(".after3Image img"), {xPercent: -100, x: 0}, {xPercent: 0}, 2)
        .fromTo(section.querySelector(".after5Image"), { xPercent: -100, x: 0}, {xPercent: 0}, 3)
        .fromTo(section.querySelector(".after5Image img"), {xPercent: 100, x: 0}, {xPercent: 0}, 3)
    });
  },
  data() {
    return {
      items: []
    }
  }
};


</script>

<style scoped>
.comparisonSection {
  position: relative;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
}
.comparisonImage {
  width: 100%;
  height: 100%;
}
.afterImage {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}
.afterImage img {
  transform: translate(-100%, 0px);
}
.comparisonImage img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.after2Image {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}
.after2Image img {
  transform: translate(-100%, 0px);
}

.after3Image {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}
.after3Image img {
  transform: translate(-100%, 0px);
}
.after5Image {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}
.after5Image img {
  transform: translate(-100%, 0px);
}
</style>