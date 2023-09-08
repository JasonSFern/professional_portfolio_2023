<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: `ScrollSkew`,
  data() {
    return {
      isLoaded: true,
    };
  },
  mounted() {
    // const section = document.querySelector("section");
    // let currentPos = window.pageYOffset;
    // const update = () => {
    //   const newPos = window.pageYOffset;
    //   const diff = newPos - currentPos;
    //   const speed = diff * 0.35;
    //   section.style.transform = `skewY(${speed}deg)`;
    //   currentPos = newPos;
    //   requestAnimationFrame(update);
    // };
    // update();
  },
};
</script>

<style scoped>
section {
  width: auto;
  transition: transform 0.25s;
  will-change: transform;
  margin-top: 100px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>