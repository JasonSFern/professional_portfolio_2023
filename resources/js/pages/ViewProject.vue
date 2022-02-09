<template>
  <v-main>
    <v-container>
      <h2>{{ item.title }}</h2>
      <p>{{ item.subtitle }}</p>
      <br/>
      <div class="cardFlow">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <img style="max-width:300px;height:auto;" :src="item.photo2" ref=""/>
          </swiper-slide>
          <swiper-slide>
            <img style="max-width:300px;height:auto;" :src="item.photo3" ref=""/>
          </swiper-slide>
          <swiper-slide>
            <img style="max-width:300px;height:auto;" :src="item.photo4" ref=""/>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <p>{{ item.contents }}</p>
    </v-container>
  </v-main>
</template>

<script>
import projectsApi from '../api/projects'
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

import { Carousel3d, Slide } from 'vue-carousel-3d';

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: `ViewProject`,
  components: {
      CarouselCard,
      CarouselCardItem,
      Carousel3d,
      Slide,
      Swiper,
      SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    item_id: { 
      required: true,
      type: Number
    }
  },
  data() {
    return {
      item: {},
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0,
        slideToClickedSlide: true,
        effect: "coverflow",
        autoHeight: false,
        setWrapperSize: true,
        height: 500,
        coverflowEffect: {
          rotate: 20,
          slideShadows: false,
          stretch: -100,
          depth: 400
          //modifier: 5
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
      }
    }
  },
  created() {
    if (this.$route.name == 'viewgraphicproject') {
      projectsApi.getGraphicProjectById(this.item_id).then(response => {
        this.item = response.data
      })
    }
    if (this.$route.name == 'viewcodingproject') {
      projectsApi.getCodingProjectById(this.item_id).then(response => {
        this.item = response.data
      })
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<style scoped>

.cardFlow {
  padding: 20px 0;
  border-radius: 15px;
  overflow: hidden;
  height: 500px;
  transform-style: preserve-3d;
}
</style>