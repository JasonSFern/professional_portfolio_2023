<template>
  <v-layout row justify-center align-center wrap class="mt-2 pt-2">
    <div class="d-flex main-text main-glow">
      <h1>4</h1>
      <h1>0</h1>
      <h1>4</h1>
    </div>
    <p class="secondary-glow"><strong>(>'-')>&nbsp;&nbsp;&nbsp;PAGE NOT FOUND</strong></p>
  </v-layout>
</template>

<script>
export default {};
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
  animation: flicker-main 1.5s infinite alternate;
}

.secondary-glow {
  color: var(--v-primary-base);
  animation: flicker-secondary 1.5s infinite alternate;
}

@keyframes flicker-main {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 7px var(--v-primary-base),
      0 0 10px var(--v-primary-base),
      0 0 21px var(--v-primary-base),
      0 0 42px var(--v-accent-base),
      0 0 82px var(--v-accent-base),
      0 0 92px var(--v-accent-base),
      0 0 102px var(--v-accent-base),
      0 0 151px var(--v-accent-base);
  }
  20%, 24%, 55% {        
      text-shadow: none;
  }    
}

@keyframes flicker-secondary {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 7px var(--v-primary-base),
      0 0 10px var(--v-primary-base),
      0 0 21px var(--v-primary-base),
      0 0 42px var(--v-secondary-base),
      0 0 82px var(--v-secondary-base),
      0 0 92px var(--v-secondary-base),
      0 0 102px var(--v-secondary-base),
      0 0 151px var(--v-secondary-base);
  }
  20%, 24%, 55% {        
    text-shadow: none;
  }    
}

</style>