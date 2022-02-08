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
