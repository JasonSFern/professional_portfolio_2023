<template>
  <div style="padding-top: 8vh">
    <h1 ref="hello" class="greeting pa-0 ma-0">Hello</h1>
    <div class="layer1">
      <div class="layer2">
        <div class="layer3"></div>
      </div>
    </div>
    <vue-typer
      :text="typerText"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="2000"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
      />
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>

import $ from 'jquery';
import { VueTyper } from 'vue-typer';

export default {
    name: "SplashLogo",
    components: {
      VueTyper,
    },
    data() {
      return {
        typerText: ["< code_monkey /> 👨‍💻", "DESIGNER ~ 🎨", "Night Owl * 🌙"]
      };
    },
    mounted() {
      var logo = $(".layer1");

      $(document).on("mousemove",function(e) {
          var ax = -($(window).innerWidth()/2- e.pageX)/60;
          var ay = ($(window).innerHeight()/2- e.pageY)/30;
          logo.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
      });

      this.gsap.fromTo(this.$refs.hello, {opacity:0}, {duration: .5, opacity: 1, delay:1 });
    }
}

</script>

<style scoped>

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
  background-image: url("/img/splash/logo3.png");
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
  background-image: url("/img/splash/logo2.png");
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

.greeting {
  font-size: 60px;
  text-transform: uppercase;
}

</style>