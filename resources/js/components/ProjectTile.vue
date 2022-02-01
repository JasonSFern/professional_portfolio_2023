<template>
    <div style="padding-top: 50px" @mousemove="mouseMoved">
        <div class="per-container per-center" :style="rotation">
            <img ref="per-image" class="per-image" src="https://www.dropbox.com/s/b0h57o6sxznnowy/drone-00.webp?raw=1">
            <h1 class="per-title">Dr.one</h1>
            <div class="per-card">
                <p>Chupa chups lollipop jelly cake icing wafer chocolate lollipop candy canes. Marzipan dragée biscuit cotton candy sweet roll sugar plum. Toffee sweet jelly beans cake gummies gummies jujubes cotton candy sugar plum.</p>
            </div>
        </div>
    </div>
</template>

<script>

const maxRotationDegrees = 20;

export default {
    name: "ProjectTile",
    data: function () {
        return {
            rotX: 0,
            rotY: 0
        }
    },
    computed: {
        rotation () {
            return {
                transform: `perspective(1000px) rotateY(${this.rotX}deg) rotateX(${this.rotY}deg)`
            }
        }
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

body {
  background-color: #36B5B2
}

.per-container {
  position: relative;
  margin-top: 40px;
  transform-origin: 50%;
  transform-style: preserve-3d;
}

.per-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.per-image {
  transform: translateZ(-100px);
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

.per-card {
  position: absolute;
  background-color: white;
  bottom: -20px;
  padding: 20px;
  width: 400px;
  height: 200px;
  transform: translateZ(100px);
}

</style>
