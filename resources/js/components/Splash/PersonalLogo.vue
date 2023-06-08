<template>
  <div ref="logo">
    <div v-if="mobileDevice" class="logo-static">
      <img src="/img/splash/logo_layer_1.png" alt="logo" />
    </div>
    <div v-else class="logo-layer layer0">
      <div class="logo-layer layer1">
        <div class="logo-layer layer2">
          <div class="logo-layer layer3">
            <div class="logo-layer layer4" />
          </div>
        </div>
      </div>
    </div>
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

export default {
  name: "PersonalLogo",
  computed: {
    mobileDevice() {
      return isMobile();
    },
  },
  mounted() {
    if (!this.mobileDevice) {
      var logo = $(".layer0");

      $(document).on("mousemove", function (e) {
        var ax = -($(window).innerWidth() / 2 - e.pageX) / 35;
        var ay = ($(window).innerHeight() / 2 - e.pageY) / 20;
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
  width: 23.5em;
  transform-style: preserve-3d;
  display: flex;
  position: relative;
}

@media (min-width: 500px) {
  .layer0 {
    background-color: var(--v-gradient6-base);
  }
  .layer1 {
    background-color: var(--v-accent-base);
  }
}

@media (max-width: 499px) {
  .layer0 {
    background-color: transparent;
  }
  .layer1 {
    background-color: transparent;
  }
}

.layer0 {
  transform: translateZ(0px);
  border-radius: 50px;
  margin: 8px auto 30px auto;
}

.layer1 {
  transform: translateZ(20px);
  border-radius: 50px;
}

.layer2 {
  transform: translateZ(0px);
  background-image: url("/img/splash/logo_layer_2.png");
}

.layer3 {
  transform: translateZ(25px);
  background-image: url("/img/splash/logo_layer_3.png");
}

.layer4 {
  transform: translateZ(25px);
  background-image: url("/img/splash/logo_layer_4.png");
}
</style>
