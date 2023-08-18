<template>
  <div style="padding-top: 5.5vh">
    <!-- Name -->
    <div class="d-flex justify-content-around">
      <div class="d-block d-sm-flex">
        <h1
          ref="firstname"
          class="greeting pa-0 ma-0 primary-color-c primary-color-glow"
        >
          JASON&nbsp;&nbsp;
        </h1>

        <h1 ref="lastname" class="greeting pa-0 ma-0 accent-color-c">
          FERNANDES
        </h1>
      </div>
    </div>
    <!-- Title typer -->
    <div ref="typer" class="mb-5">
      <vue-typer
        :text="typerText"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="2000"
        :type-delay="70"
        :pre-erase-delay="1980"
        :erase-delay="150"
        erase-style="select-back"
        :erase-on-complete="false"
        caret-animation="smooth"
      />
    </div>
    <!-- Logo -->
    <div ref="logo">
      <PersonalLogo />
    </div>
    <!-- Tagline -->
    <div class="d-flex justify-content-around">
      <div class="d-block d-sm-flex">
        <h3 class="pa-0 ma-0 primary-color-c" style="font-weight: 400">
          <span class="tagsec1">Fusing&nbsp;</span>
          <span class="secondary-color-c secondary-color-c-glow tagsec2"
            >Art&nbsp;</span
          >
          <span class="accent-color-c accent-color-c-glow tagsec2"
            ><strong>+</strong></span
          >
          <span class="secondary-color-c secondary-color-c-glow tagsec2"
            >Tech&nbsp;</span
          >
          <span class="tagsec3">for Elevated User Experiences</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalLogo from "./PersonalLogo";
import { VueTyper } from "vue-typer";

export default {
  name: "SplashLogo",
  components: {
    VueTyper,
    PersonalLogo,
  },
  data() {
    return {
      typerText: [
        "< full_stack_developer /> 👨‍💻",
        "UX/UI DESIGNER 🧑‍🎨",
        "Night Owl * 🌙 🦉",
      ],
    };
  },
  mounted() {
    this.gsap
      .timeline()
      .fromTo(
        this.$refs.logo,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 2 }
      )
      .fromTo(
        this.$refs.firstname,
        { opacity: 0, yPercent: -30 },
        { duration: 0.5, opacity: 1, yPercent: 0, delay: 0.5 }
      )
      .fromTo(
        this.$refs.lastname,
        { opacity: 0, yPercent: -30 },
        { duration: 0.5, opacity: 1, yPercent: 0, delay: 0.2 }
      )
      .fromTo(
        this.$refs.typer,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 0.3 }
      )
      .fromTo(
        ".tagsec1",
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 0.7 }
      )
      .fromTo(
        ".tagsec2",
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 0.2 }
      )
      .fromTo(
        ".tagsec3",
        { opacity: 0 },
        { duration: 0.5, opacity: 1, delay: 0.5 }
      );
  },
};
</script>

<style scoped>
.greeting {
  text-transform: uppercase;
}

@media (min-width: 500px) {
  .greeting {
    font-size: 80px;
  }
}

@media (max-width: 499px) {
  .greeting {
    font-size: 50px;
  }
}
</style>
