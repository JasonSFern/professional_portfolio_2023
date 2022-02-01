<template>
  <v-content>
    <v-container align-center>
      <splash-logo></splash-logo>
  <!-- <h2>HOME</h2> -->
    <!-- <router-link to="/overlay">
      <div class="navigation graphics">
        <span class="text link">
          <h2>G</h2>
          <h2>R</h2>
          <h2>A</h2>
          <h2>P</h2>
          <h2>H</h2>
          <h2>I</h2>
          <h2>C</h2>
          <h2>S</h2>
        </span>
      </div>
    </router-link> -->
    
    <!-- <router-link to="/about/more">
      <div class="navigation contact">
        <span class="text link">
          <h2>T</h2>
          <h2>C</h2>
          <h2>A</h2>
          <h2>T</h2>
          <h2>N</h2>
          <h2>O</h2>
          <h2>C</h2>
        </span>
      </div>
    </router-link> -->

    <!-- <router-link to="/about">
      <div class="navigation websites">
        <span class="text link">
          <h2>W</h2>
          <h2>E</h2>
          <h2>B</h2>
        </span>
      </div>
    </router-link> -->
    <!-- <v-btn class="main-navigation top-navigation"><h2 class="">GRAPHICS</h2></v-btn>

     <v-btn class="main-navigation bottom-navigation"><h2 class="">WEB</h2></v-btn> -->
    
    <!-- <router-link to="/home">
      <div class="navigation about">
        <span class="text link">
          <h2>A</h2>
          <h2>B</h2>
          <h2>O</h2>
          <h2>U</h2>
          <h2>T</h2>
        </span>
      </div>
    </router-link> -->
  <!-- </div> -->
    </v-container>
  </v-content>
</template>

<script>
import SplashLogo from '../components/SplashLogo.vue';
export default {
  name: `Home`,
  components: {
    SplashLogo,
  },
};
</script>