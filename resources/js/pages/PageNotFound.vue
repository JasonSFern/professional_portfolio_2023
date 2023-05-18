<template>
  <v-layout row justify-center align-center wrap class="mt-2 pt-2">
    <div class="d-flex main-text main-glow">
      <h1>4</h1>
      <h1>0</h1>
      <h1>4</h1>
    </div>
    <p class="secondary-glow">
      <strong>{{ chosenText }}&nbsp;&nbsp;&nbsp;PAGE NOT FOUND</strong>
    </p>
  </v-layout>
</template>

<script>
export default {
  name: `PageNotFound`,
  data() {
    return {
      text: ["(>'-')>", "<('-'<)"],
      chosenText: "(>'-')>",
    };
  },
  mounted() {
    this.gsap
      .timeline()
      .fromTo(
        ".main-glow",
        { opacity: 0 },
        { duration: 0.75, opacity: 1, delay: 1 }
      )
      .fromTo(
        ".secondary-glow",
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 0.25 }
      );

    setInterval(() => {
      let chosenIndex = Math.floor(Math.random() * this.text.length);
      this.chosenText = this.text[chosenIndex];
    }, 1000);
  },
  methods: {
    navigateToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
p {
  position: relative;
  padding-top: 85px;
  color: var(--v-primary-base);
  z-index: 9;
}

.main-text {
  text-align: center;
  position: relative;
}

.main-text h1 {
  position: relative;
  color: var(--v-primary-base);
  font-size: 240px;
  z-index: 9;
}

.main-glow {
  color: var(--v-primary-base);
  text-shadow: 0 0 3px var(--v-primary-base), 0 0 10px var(--v-primary-base),
    0 0 18px var(--v-primary-base);
}

.secondary-glow {
  color: var(--v-primary-base);
}
</style>