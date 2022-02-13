<template>
  <v-main>
    <v-container>
      <div v-show="important">
        <h2>{{ item.title }}</h2>
      </div>
      <br/>
      <div class="d-flex">
        <div class="col-md-5 pl-0 glossy asshole">
            <img v-for="(image, index) in showcase" :key="index" :src="image" ref="" class="asshole pb-2 image-wrap" style="width:inherit;"/>
        </div>
        <div class="col-md-7">
          <h2>{{ item.title }}</h2>
          <p>{{ item.subtitle }}</p>
          <hr/>
          <p>{{ item.description }}</p>
          <div v-if="item.route">
            <v-btn :href="item.route">Launch</v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import projectsApi from '../api/projects'

export default {
  name: `ViewProject`,
  props: {
    item_id: { 
      required: true,
      type: Number
    }
  },
  data() {
    return {
      item: {},
      photos: {},
      important: false
    }
  },
  created() {
      projectsApi.getProjectById(this.item_id).then(response => {
        this.item = response.data

        var photos = JSON.parse(this.item.photos)
        this.item.photos = photos
        this.photos = photos.showcase

        this.init()
      })
  },
  computed: {
    showcase() {
      return this.photos
    }
  },
  mounted() {
  },
  methods: {
    init() {
      this.gsap.fromTo('.asshole',{opacity:0 }, {opacity: 1, duration: 2, delay: 3 });
    }
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

.image-wrap {
	border-radius: 20px;
}

.asshole {
  font-weight: 800;
}
</style>