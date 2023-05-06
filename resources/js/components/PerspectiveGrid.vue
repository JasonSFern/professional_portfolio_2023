<template>
  <div class="grid-wrapper">
    <div class="grid">
      <div class="vertical">
        <div v-for="c in lines" :key="`column-${c}`" class="line"></div>
      </div>
      <div class="dots">
        <div v-for="d in dots" :key="`dot-${d}`" class="dot"></div>
      </div>
      <div class="horizontal">
        <div v-for="r in lines" :key="`row-${r}`" class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerspectiveGrid",
  data() {
    return {
      lines: 21,
      dots: 17,
    };
  },
};
</script>