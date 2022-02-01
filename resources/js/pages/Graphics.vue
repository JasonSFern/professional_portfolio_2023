<template>
  <vue-scroll-snap :fullscreen="true">
    <!-- <section v-for="item in items" :key="item.id" :id="`s${item.id}`" class="background-projects" :style="`background-image:url(${item.background});`">
      <div class="photo-wrapper-content photo-wrapper-cards">

        <div :id="`b${item.id}`">
          <img :src="item.photo"/>
        </div>

        <div :id="`a${item.id}`">
          <img :src="item.logo"/>
        </div>

        <div class="projects-card" :id="`c${item.id}`" :style="`background-image: linear-gradient(to bottom right, ${item.backdrop});`">

          <div class="titles">
            <h4>{{item.title}}</h4>
            <h2>{{item.subtitle}}</h2>
            <br>
            <br>
          </div>

          <div>
            <div>
              <a class="button" :href="`/webProjects/${item.id}`">EXPLORE</a>
            </div>
          </div>

        </div>

      </div>
    </section> -->
    <project-tile v-for="item in items" :key="item.id" class="item"></project-tile>  
  </vue-scroll-snap>








      <!-- <project-tile></project-tile> -->
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

</template>

<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script>
import ProjectTile from '../components/ProjectTile.vue';
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: `Graphics`,
  components: {
    ProjectTile,
    VueScrollSnap
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'MRUimpact',
          subtitle: 'SOLD - Film Screening',
          background: '/img/sageb.jpg',
          backdrop: '#002f4b,#dc4225',
          photo:'/img/sold1.jpg',
          contents: 'The purpose of this project was to promote the screening of the film “SOLD”, which was part of several screenings taking place under Mount Royals “E” campaign (MRUimpact); a collaborative project between Mount Royal University marketing students, and Paul Brandt and his Buckspring Foundation. The purpose of the campaign was to raise awareness and involvement in addressing the issue of the exploitation of vulnerable groups within Canada and around the world.</p><p>Within the E campaign, our team created and implemented a marketing campaign for the film screening of “SOLD”, which took place on November 8, 2016 at The Plaza Theatre in Calgary. I designed the promotional materials for the campaign; posters, postcards and brochures designed to promote the film, and an email template sent to participants of the film screening. Print materials were displayed on campus and at the film screening.',
          photo2: '/img/sold2.jpg',
          photo3: '/img/sold3.jpg',
          photo4: '/img/sold4.jpg',
        },
        {
          id: 2,
          title: 'MRUimpact',
          subtitle: 'SOLD - Film Screening',
          background: '/img/figb.jpg',
          backdrop: '#025f4b,#dc4225',
          photo:'/img/sold1.jpg',
          contents: 'The purpose of this project was to promote the screening of the film “SOLD”, which was part of several screenings taking place under Mount Royals “E” campaign (MRUimpact); a collaborative project between Mount Royal University marketing students, and Paul Brandt and his Buckspring Foundation. The purpose of the campaign was to raise awareness and involvement in addressing the issue of the exploitation of vulnerable groups within Canada and around the world.</p><p>Within the E campaign, our team created and implemented a marketing campaign for the film screening of “SOLD”, which took place on November 8, 2016 at The Plaza Theatre in Calgary. I designed the promotional materials for the campaign; posters, postcards and brochures designed to promote the film, and an email template sent to participants of the film screening. Print materials were displayed on campus and at the film screening.',
          photo2: '/img/sold2.jpg',
          photo3: '/img/sold3.jpg',
          photo4: '/img/sold4.jpg',
        },
        {
          id: 3,
          title: 'MRUimpact',
          subtitle: 'SOLD - Film Screening',
          background: '/img/soldb.jpg',
          backdrop: '#002f4b,#dc4225',
          photo:'/img/sold1.jpg',
          contents: 'The purpose of this project was to promote the screening of the film “SOLD”, which was part of several screenings taking place under Mount Royals “E” campaign (MRUimpact); a collaborative project between Mount Royal University marketing students, and Paul Brandt and his Buckspring Foundation. The purpose of the campaign was to raise awareness and involvement in addressing the issue of the exploitation of vulnerable groups within Canada and around the world.</p><p>Within the E campaign, our team created and implemented a marketing campaign for the film screening of “SOLD”, which took place on November 8, 2016 at The Plaza Theatre in Calgary. I designed the promotional materials for the campaign; posters, postcards and brochures designed to promote the film, and an email template sent to participants of the film screening. Print materials were displayed on campus and at the film screening.',
          photo2: '/img/sold2.jpg',
          photo3: '/img/sold3.jpg',
          photo4: '/img/sold4.jpg',
        },
      ],
    };
  },
};
</script>
