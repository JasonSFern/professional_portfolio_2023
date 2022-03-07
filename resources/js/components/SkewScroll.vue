<template>
  <section class="skew-box">
    <div>▲</div>
    <div>△</div>
    <div>▲</div>
    <div>△</div>
    <div>▲</div>
    <div>△</div>
  </section>
</template>

<script>

export default {
  name: `SkewScroll`,
  mounted() {
    const section = document.querySelector('section');

    let currentPos = window.pageYOffset;

    const update = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;
      
      section.style.transform = `skewY(${ speed }deg)`;
      
      currentPos = newPos;
      
      requestAnimationFrame(update);
    }

    update();
  },
  data() {
    return {
      items: []
    }
  }
};


</script>

<style scoped>

skew-box {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  margin: 0; padding: 0;
}

*, *:before, *:after {
  box-sizing: inherit;
}

section {
	max-width: 600px;
	width: 100%;
	margin: 0 auto;
	padding: 60px 15px;
	transition: transform 0.25s;
	will-change: transform;
}

section div {
  width: 100%;
  height: 400px;
  background: black;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
}

section div:last-child {
  margin-bottom: 0;
}

</style>