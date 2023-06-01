<template>
  <div style="padding-top: 8vh">
    <h1 ref="hello" class="greeting pa-0 ma-0 primary-color-c">Hello</h1>
    <div v-if="mobileDevice" class="logo-static">
      <img src="/img/splash/logo_layer_1.png" alt="logo" />
    </div>
    <div v-else class="logo-layer layer1">
      <div class="logo-layer layer2">
        <div class="logo-layer layer3">
          <div class="logo-layer layer4" />
        </div>
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
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"
></script>
<script>
import $ from "jquery";
import { isMobile } from "../../plugins/helpers";
import { VueTyper } from "vue-typer";

export default {
  name: "SplashLogo",
  components: {
    VueTyper,
  },
  computed: {
    mobileDevice() {
      return isMobile();
    },
  },
  data() {
    return {
      typerText: ["< code_monkey /> 👨‍💻", "DESIGNER ~ 🎨", "Night Owl * 🌙"],
    };
  },
  mounted() {
    if (!this.mobileDevice) {
      var logo = $(".layer1");

      $(document).on("mousemove", function (e) {
        var ax = -($(window).innerWidth() / 2 - e.pageX) / 60;
        var ay = ($(window).innerHeight() / 2 - e.pageY) / 30;
        logo.attr(
          "style",
          "transform: rotateY(" +
            ax +
            "deg) rotateX(" +
            ay +
            "deg);-webkit-transform: rotateY(" +
            ax +
            "deg) rotateX(" +
            ay +
            "deg);-moz-transform: rotateY(" +
            ax +
            "deg) rotateX(" +
            ay +
            "deg)"
        );
      });

      this.gsap.fromTo(
        this.$refs.hello,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 1 }
      );
    }
  },
};
</script>

<style scoped>
.logo-static {
  height: 17em;
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo-layer {
  pointer-events: none;
  height: 17em;
  width: 24.5em;
  transform-style: preserve-3d;
  display: flex;
  position: relative;
}

.layer1 {
  border-radius: 50px;
  margin: 8px auto 30px auto;
}

@media (min-width: 500px) {
  .layer1 {
    background-color: var(--v-accent-base);
    box-shadow: 0 0 8px 0px var(--v-accent-base);
  }
}

@media (max-width: 499px) {
  .layer1 {
    background-color: transparent;
  }
}

.layer2 {
  transform: translateZ(80px);
  background-image: url("/img/splash/logo_layer_2.png");
}

.layer3 {
  transform: translateZ(40px);
  background-image: url("/img/splash/logo_layer_3.png");
}

.layer4 {
  transform: translateZ(40px);
  background-image: url("/img/splash/logo_layer_4.png");
}

.greeting {
  font-size: 80px;
  text-transform: uppercase;
}
</style>
