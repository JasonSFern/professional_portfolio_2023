<template>
  <v-content>
    <v-container>
      HELLO
      <h2>{{ item.title }}</h2>
      <p>{{ item.subtitle }}</p>
      <br/><br/>
      <p>{{ item.contents }}</p>
      <img width="500px" :src="item.photo2" />
      <img width="500px" :src="item.photo3" />
      <img width="500px" :src="item.photo4" />
    </v-container>
  </v-content>
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
      item: {}
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
  mounted() {
    // this.startBuffer();
  },
};
</script>
