<template>
  <div>
    <div class="sections-menu">
      <span
         class="menu-point"
         v-bind:class="{active: activeSection == index}"
         v-on:click="scrollToSection(index)"
         v-for="(offset, index) in offsets"
         v-bind:key="index">
      </span>
    </div>
    <slot></slot>
  </div>

</template>

<script>
    export default {
        name: "VueScrollSnap",
        props: {
            isLoaded: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            isLoaded: function(vNew, vOld) {
                if(vNew == true) {
                    this.init()
                }
            }
        },
        data() {
            return {
                inMove: false,
                activeSection: 0,
                offsets: [],
                touchStartY: 0
            }
        },
        methods: {
            calculateSectionOffsets() {
            let sections = document.getElementsByTagName('section');
            let length = sections.length;
            
            for(let i = 0; i < length; i++) {
                let sectionOffset = sections[i].offsetTop;
                this.offsets.push(sectionOffset);
            }
            },
            handleMouseWheel: function(e) {

            if (e.wheelDelta < 30 && !this.inMove) {
                this.moveUp();
            } else if (e.wheelDelta > 30 && !this.inMove) {
                this.moveDown();
            }
                
            e.preventDefault();
            return false;
            },
            handleMouseWheelDOM: function(e) {
            
            if (e.detail > 0 && !this.inMove) {
                this.moveUp();
            } else if (e.detail < 0 && !this.inMove) {
                this.moveDown();
            }
            
            return false;
            },
            moveDown() {
            this.inMove = true;
            this.activeSection--;
                
            if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
                
            this.scrollToSection(this.activeSection, true);
            },
            moveUp() {
            this.inMove = true;
            this.activeSection++;
                
            if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
                
            this.scrollToSection(this.activeSection, true);
            },
            scrollToSection(id, force = false) {
            if(this.inMove && !force) return false;
            console.log(id)

            this.activeSection = id;
            this.inMove = true;
            console.log('RAN')
            document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
            
            this.$emit("setCustomTheme", id);
            
            setTimeout(() => {
                this.inMove = false;
            }, 400);
            
            },
            touchStart(e) {
            e.preventDefault();
            
            this.touchStartY = e.touches[0].clientY;
            },
            touchMove(e) {
            if(this.inMove) return false;
            e.preventDefault();
            
            const currentY = e.touches[0].clientY;
            
            if(this.touchStartY < currentY) {
                this.moveDown();
            } else {
                this.moveUp();
            }
            
            this.touchStartY = 0;
            return false;
            },
            init() {
                this.calculateSectionOffsets();
                this.$emit("setCustomTheme", 0);
                document.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
                document.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers

                document.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
                document.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
            }
        },
        destroyed() {
            document.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
            document.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
            
            document.removeEventListener('touchstart', this.touchStart); // mobile devices
            document.removeEventListener('touchmove', this.touchMove); // mobile devices
        }
    };

</script>

<style scoped>

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index:1;
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: var(--v-accent-base);
  border-radius: 5px;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

.fullpage {
  height: 100vh;
  width: 100%;
}

</style>
