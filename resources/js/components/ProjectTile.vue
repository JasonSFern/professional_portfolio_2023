<template>
  <section v-show="!hidden" class="fullpage" :style="{ paddingTop: '15%', backgroundColor: this.tileColour }" @mousemove="mouseMoved">
    <div class="per-container per-center" :style="rotation">
      <div ref="perholder1" class="per-holder per-image rounded-xl">
        <img ref="perimage1" class="rounded-xl" width="400px" :src="item.photo">
      </div>
      <h1 class="per-title">{{ item.title }}</h1>
      <div ref="perholder2"  class="per-holder per-holder-card rounded-xl">
        <div ref="perimage2" class="per-card rounded-xl">
          <p>{{ item.subtitle }}</p>
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
                .fromTo(this.$refs.perholder1, {yPercent:-100}, {duration: .5, yPercent:0,})
                .fromTo(this.$refs.perimage1, {yPercent:-100}, {duration: .5, yPercent: 0,}, ">")
                .fromTo(this.$refs.perholder2, {yPercent:-100}, {duration: .5, yPercent:0})
                .fromTo(this.$refs.perimage2, {yPercent:-100}, {duration: .5, yPercent: 0});
            }
        }
    },
    data: function () {
        return {
            rotX: 0,
            rotY: 0,
            colours: [
              'red',
              'orange',
              'yellow',
              'green',
              'blue',
              'purple'
            ],
            hidden: true,
            animate1: null,
        }
    },
    computed: {
        rotation () {
            return {
                transform: `perspective(1000px) rotateY(${(this.rotX)}deg) rotateX(${(this.rotY)}deg)`
            }
        },
        tileColour () {
          return this.colours[Math.floor(Math.random() * this.colours.length)];
        }
    },
    mounted() {
      // this.animate1 = this.gsap.timeline()
      //   .fromTo(".per-holder", {yPercent:-100}, {duration: 1, yPercent:0, delay: 2})
      //   .fromTo(".per-holder img", {yPercent:-100}, {duration: 1, yPercent: 0, delay: 2}, ">");
    },
    methods: {
        mouseMoved (e) {
        // This gives us a number between -1 and 1
        const mousePercX = (e.pageX / document.body.clientWidth) * 2 - 1
        const mousePercY = (e.pageY / document.body.clientHeight) * 2 - 1
        
        this.gsap.to(this, 0.5, {
            rotX: mousePercX * maxRotationDegrees,
            rotY: mousePercY * -maxRotationDegrees
        })
        }
    }
}

</script>

<style scoped>

.per-holder {
  overflow: hidden;
}

.per-image {
  transform: translateZ(-100px);
}

.per-holder-card {
  transform: translateZ(100px);
  position: absolute;
  bottom: -40px;
}

.per-card {
  /* position: absolute; */
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  padding: 20px;
  width: 300px;
  height: 150px;
  color:black;
  /* transform: translateZ(100px); */
}


.fullpage {
  height: 100vh;
  width: 100%;
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


.per-title {
  position: absolute;
  top: 150px;
  text-align: center;
  color: white;
  font-size: 80px;
  font-family: Helvetica, Arial, Sans-Serif;
  transform: translateZ(20px);
}

h1 {
  text-shadow: 2px 2px 8px #000000;
}



</style>
