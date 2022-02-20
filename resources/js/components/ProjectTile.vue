<template>
  <section v-show="!hidden" class="fullpage gradient-color-bg" @mousemove="mouseMoved">
    <div class="d-none d-md-flex per-container per-center" :style="rotation">
      <div class="per-holder per-image rounded-xl perholder1">
        <img class="per-image-d rounded-xl perimage1" :src="item.photos.titlecard">
      </div>
      <div class="per-title per-title-d">
        <h1 class="pertext">{{ item.title }}</h1>
      </div>
      <div class="per-holder per-card-holder rounded-xl perholder2">
        <div class="per-card per-card-d rounded-xl perimage2">
          <div style="height:40%;" >
            <p class="persubtext">{{ item.subtitle }}</p>
          </div>
          <div style="height:60%;" class="d-flex flex-row-reverse align-end">
            <img v-for="(skill, index) in item.skills.icons" :key="index" class="skill-icon px-1" :src="skill" />
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex d-md-none per-container per-center">
      <div class="per-holder rounded-xl perholder1">
        <img class="per-image-m rounded-xl perimage1" :src="item.photos.titlecard">
      </div>
      <div class="per-title per-title-m">
        <h1 class="pertext">{{ item.title }}</h1>
      </div>
      <div class="per-holder per-card-holder rounded-xl perholder2">
        <div class="per-card per-card-m rounded-xl perimage2">
          <div style="height:40%;" >
            <p class="persubtext">{{ item.subtitle }}</p>
          </div>
          <div style="height:60%;" class="d-flex flex-row-reverse align-end">
            <img v-for="(skill, index) in item.skills.icons" :key="index" class="skill-icon px-1" :src="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

const maxRotationDegrees = 20;

export default {
    name: "ProjectTile",
    props: {
      item: Object,
      isLoaded: {
          type: Boolean,
          default: false
      }
    },
    watch: {
        isLoaded: function(vNew, vOld) {
            if(vNew == true) {
              this.hidden = false

              this.gsap.timeline()
                .fromTo('.perholder1', {yPercent:-100}, {duration: .5, yPercent:0,})
                .fromTo('.perimage1', {yPercent:-100}, {duration: .5, yPercent: 0,}, ">")
                .fromTo('.pertext', {opacity:0}, {duration: .5, opacity: 1})
                .fromTo('.perholder2', {yPercent:-100}, {duration: .5, yPercent:0})
                .fromTo('.perimage2', {yPercent:-100}, {duration: .5, yPercent: 0})
                .fromTo('.persubtext', {opacity:0}, {duration: .5, opacity: 1});
            }
        }
    },
    data: function () {
        return {
            rotX: 0,
            rotY: 0,
            hidden: true
        }
    },
    computed: {
        rotation () {
            return {
                transform: `perspective(1000px) rotateY(${(this.rotX)}deg) rotateX(${(this.rotY)}deg)`
            }
        }
    },
    mounted() {
    },
    methods: {
        mouseMoved (e) {
        // This gives us a number between -1 and 1
        const mousePercX = (e.pageX / document.body.clientWidth) * 2 - 1
        const mousePercY = (e.pageY / document.body.clientHeight) * 2 - 1
        
        this.gsap.to(this, 0.5, {
            rotX: mousePercX * maxRotationDegrees,
            // rotY: mousePercY * -maxRotationDegrees
        })
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

.fullpage {
  height: 100vh;
  width: 100%;
  padding-top: 18vh;
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
}

.per-image-m {
  width: 300px;
}

.per-title {
  position: absolute;
  word-wrap:normal;
}

.per-title h1 {
  text-shadow: 2px 2px 8px #000000;
  text-align: center;
  color: white;
  font-size: 50px;
  font-family: 'Titillium', sans-serif;
  text-transform: uppercase;
}

.per-title-d {
  transform: translateZ(20px);
  top: 115px;
  width:650px;
}

.per-title-d h1 {
  font-size: 80px !important;
}

.per-title-m {
  top: 60px;
  width:450px;
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
  color: black;
}

.per-card p {
  font-family: 'Rubik Mono One', sans-serif;
}

.per-card-d {
   box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
}

.per-card-m {
   background-color: var(--v-accent-base);
}

</style>
