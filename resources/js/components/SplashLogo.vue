<template>
  <div style="padding-top: 100px">
    <div class="layer1">
      <div class="layer2">
        <div class="layer3"></div>
      </div>
    </div>
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>

import $ from 'jquery';

export default {
    name: "SplashLogo",
    mounted() {
      var logo = $(".layer1");

      $(document).on("mousemove",function(e) {
          var ax = -($(window).innerWidth()/2- e.pageX)/60;
          var ay = ($(window).innerHeight()/2- e.pageY)/30;
          logo.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
      });
    }
}

</script>

<style scoped>
/*3D logo*/
.logo-container {
  padding-top: calc(32vh - 130px);
  margin-left: -1%;
  transform: scale(0.75);
}
.logo-container h4 {
  margin: 0px, 0px;
  text-align: center;
  font-size: 60px;
  text-transform: uppercase;
}

.logo-container-mobile {
  transform: scale(0.75);
  text-align: center;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -100px;
}
.logo-container-mobile h4 {
  margin: 0px, 0px;
  text-align: center;
  text-transform: uppercase;
}

.layer1 {
  pointer-events: none;
  transform: translateZ(0);
  background-color: var(--v-accent-base);
  border-radius: 50px;
  width: 23em;
  height: 17em;
  margin: 30px auto 30px auto;
  transform-style: preserve-3d;
  display: flex;
  position: relative;
}
.layer1:after {
  content: " ";
  position: absolute;
  width: 25em;
  height: 17px;
  border-radius: 50%;
  left: 0;
  bottom: -50px;
}

.layer2 {
  pointer-events: none;
  transform: translateZ(80px);
  background-image: url("/img/logo4.png");
  border-radius: 5px;
  width: 25em;
  height: 17em;
  margin: auto;
  transform-style: preserve-3d;
  display: flex;
  position: relative;
}
.layer2:after {
  content: " ";
  position: absolute;
  width: 25em;
  height: 17em;
  border-radius: 50%;
  left: 0;
  bottom: -50px;
}

.layer3 {
  pointer-events: none;
  transform: translateZ(80px);
  background-image: url("/img/logo2.png");
  border-radius: 5px;
  width: 25em;
  height: 17em;
  margin: auto;
  transform-style: preserve-3d;
  display: flex;
  position: relative;
}
.layer3:after {
  content: " ";
  position: absolute;
  width: 25em;
  height: 17em;
  border-radius: 50%;
  left: 0;
  bottom: -50px;
}
</style>