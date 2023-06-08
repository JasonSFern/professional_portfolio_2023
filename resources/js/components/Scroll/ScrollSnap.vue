<template>
  <div v-show="isLoaded" id="container">
    <div class="sections-menu">
      <div v-for="(offset, index) in offsets" :key="`menu-point-${index}`">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="menu-point"
              :class="{ active: activeSection == index }"
              @click="scrollToSection(index)"
            />
          </template>
          <p class="mb-0">{{ offset.title }}</p>
        </v-tooltip>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ScrollSnap",
  props: {
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isLoaded: function (vNew, vOld) {
      if (vNew == true) {
        this.init();
      }
    },
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    };
  },
  mounted() {
    this.gsap.set(".sections-menu", { opacity: 0 });
  },
  methods: {
    init() {
      this.calculateSectionOffsets();
      setTimeout(() => {
        this.inMove = true;
        this.scrollToSection(0, true);
      }, 1000);

      let el = document.getElementById("container");
      this.swipeDetect(el, this.movePage);
      this.scrollDetect(el, this.movePage);
    },
    calculateSectionOffsets() {
      this.gsap.set(".sections-menu", { opacity: 0 });

      this.offsets = [];
      let sections = document.querySelectorAll("section.fullpage");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionTitle = sections[i].getAttribute("title");
        let sectionOffset = sections[i].offsetTop;

        let sectionOffsetData = {
          title: sectionTitle,
          offset: sectionOffset,
        };

        this.offsets.push(sectionOffsetData);

        // animate
        this.gsap.fromTo(
          ".sections-menu",
          { opacity: 0 },
          { duration: 0.5, opacity: 1, delay: 2 }
        );
      }
    },
    movePage(dir) {
      this.inMove = true;

      switch (dir) {
        case "up":
          this.activeSection++;
          break;
        case "down":
          this.activeSection--;
          break;
        default:
          break;
      }

      if (this.activeSection < 0) {
        this.activeSection = this.offsets.length - 1;
      } else if (this.activeSection > this.offsets.length - 1) {
        this.activeSection = 0;
      }

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByTagName("section")
        [id].scrollIntoView({ behavior: "smooth" });

      this.$emit("setProjectTheme", id);

      setTimeout(() => {
        this.inMove = false;
      }, 800);
    },
    scrollDetect(el, callback) {
      var scrollsurface = el,
        scrolldir,
        deltaX,
        deltaY,
        threshold = 120, //required min distance traveled to be considered scroll
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        handlescroll = callback || function (scrolldir) {};

      if (navigator.userAgent.indexOf("Firefox") != -1) {
        scrollsurface.addEventListener(
          "DOMMouseScroll",
          (e) => {
            deltaY = e.detail;

            scrolldir = deltaY < 0 ? "up" : "down"; // if delta is negative, it indicates up swipe

            if (!this.inMove) handlescroll(scrolldir);
            if (this.inMove) scrolldir = null;
            e.preventDefault();
          },
          { passive: false }
        );
      } else {
        scrollsurface.addEventListener(
          "wheel",
          (e) => {
            deltaX = e.wheelDeltaX;
            deltaY = e.wheelDeltaY;

            if (
              Math.abs(deltaX) >= threshold &&
              Math.abs(deltaY) <= restraint
            ) {
              // 2nd condition for horizontal swipe met
              scrolldir = deltaX < 0 ? "left" : "right"; // if delta is negative, it indicates left swipe
            } else if (
              Math.abs(deltaY) >= threshold &&
              Math.abs(deltaX) <= restraint
            ) {
              // 2nd condition for vertical swipe met
              scrolldir = deltaY < 0 ? "up" : "down"; // if delta is negative, it indicates up swipe
            }

            if (!this.inMove) handlescroll(scrolldir);
            if (this.inMove) scrolldir = null;
            e.preventDefault();
          },
          { passive: false }
        );
      }
    },
    swipeDetect(el, callback) {
      var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function (swipedir) {};

      touchsurface.addEventListener(
        "touchstart",
        (e) => {
          var touchobj = e.changedTouches[0];
          var dist = 0;
          swipedir = "none";
          startX = touchobj.pageX;
          startY = touchobj.pageY;
          startTime = new Date().getTime(); // record time when finger first makes contact with surface
          e.preventDefault();
        },
        { passive: false }
      );

      touchsurface.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault(); // prevent scrolling when inside DIV
        },
        { passive: false }
      );

      touchsurface.addEventListener(
        "touchend",
        (e) => {
          var touchobj = e.changedTouches[0];
          distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
          distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
          elapsedTime = new Date().getTime() - startTime; // get time elapsed
          if (elapsedTime <= allowedTime) {
            // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
              // 2nd condition for horizontal swipe met
              swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
            } else if (
              Math.abs(distY) >= threshold &&
              Math.abs(distX) <= restraint
            ) {
              // 2nd condition for vertical swipe met
              swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
            }
          }
          if (!this.inMove) handleswipe(swipedir);
          e.preventDefault();
          if (Math.abs(distX) < 1 && Math.abs(distY) < 1)
            this.$emit("viewProject", this.activeSection);
        },
        { passive: false }
      );
    },
  },
  destroyed() {
    let el = document.getElementById("container");

    el.removeEventListener("touchstart", (e) => {});
    el.removeEventListener("touchmove", (e) => {});
    el.removeEventListener("touchend", (e) => {});
    el.removeEventListener("wheel", (e) => {});
    el.removeEventListener("DOMMouseScroll", (e) => {});
  },
};
</script>

<style scoped>
.sections-menu {
  position: fixed;
  right: -3rem;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  z-index: 99;
}

.sections-menu .menu-point {
  width: 20px;
  height: 20px;
  background-color: var(--v-accent-base);
  border-radius: 5px;
  display: block;
  margin: 2rem 60px;
  opacity: 0.6;
  transition: 0.4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point:hover {
  transform: scale(1.3);
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
</style>