<template>
    <canvas id='c'></canvas>
</template>

<script>

import SimplexNoise from 'simplex-noise';

export default {
    name: "NoiseAbstraction",
    mounted() {
        /**
         * requestAnimationFrame
         */
        window.requestAnimationFrame = (function(){
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.oRequestAnimationFrame      ||
                    window.msRequestAnimationFrame     ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
        })();

        // Configs
        var Configs = {
            backgroundColor: 'transparent',
            particleNum: 1000,
            step: 1,
            base: 1000,
            zInc: 0.001
        };

        // Vars
        var canvas,
            context,
            screenWidth,
            screenHeight,
            centerX,
            centerY,
            particles = [],
            hueBase = 0,
            simplexNoise,
            zoff = 0,
            gui;

        // Initialize
        function init() {
            canvas = document.getElementById('c');

            window.addEventListener('resize', onWindowResize, false);
            onWindowResize(null);

            var len;

            for (var i = 0, len = Configs.particleNum; i < len; i++) {
                initParticle((particles[i] = new Particle()));
            }

            simplexNoise = new SimplexNoise();

            canvas.addEventListener('click', onCanvasClick, false);

            update();
        }

        // Event listeners
        function onWindowResize(e) {
            screenWidth  = canvas.width  = window.innerWidth;
            screenHeight = canvas.height = window.innerHeight;

            centerX = screenWidth / 2;
            centerY = screenHeight / 2;

            context = canvas.getContext('2d');
            context.lineWidth = 0.3;
            context.lineCap = context.lineJoin = 'round';
        }

        function onCanvasClick(e) {
            context.save();
            context.globalAlpha = 0.8;
            context.fillStyle = Configs.backgroundColor;
            context.fillRect(0, 0, screenWidth, screenHeight);
            context.restore();
            
            simplexNoise = new SimplexNoise();
        }

        // Functions
        function getNoise(x, y, z) {
            var octaves = 4,
                fallout = 0.5,
                amp = 1, f = 1, sum = 0,
                i;

            for (i = 0; i < octaves; ++i) {
                amp *= fallout;
                sum += amp * (simplexNoise.noise3D(x * f, y * f, z * f) + 1) * 0.5;
                f *= 2;
            }

            return sum;
        }

        function initParticle(p) {
            p.x = p.pastX = screenWidth * Math.random();
            p.y = p.pastY = screenHeight * Math.random();
            p.color.h = hueBase + Math.atan2(centerY - p.y, centerX - p.x) * 180 / Math.PI;
            p.color.s = 1;
            p.color.l = 0.5;
            p.color.a = 0;
        }

        // Update
        function update() {
            var step = Configs.step,
                base = Configs.base,
                i, p, angle;

                var len;
            
            for (i = 0, len = particles.length; i < len; i++) {
                p = particles[i];

                p.pastX = p.x;
                p.pastY = p.y;
            
                angle = Math.PI * 6 * getNoise(p.x / base * 1.75, p.y / base * 1.75, zoff);
                p.x += Math.cos(angle) * step;
                p.y += Math.sin(angle) * step;
                
                if (p.color.a < 1) p.color.a += 0.003;

                context.beginPath();
                context.strokeStyle = p.color.toString();
                context.moveTo(p.pastX, p.pastY);
                context.lineTo(p.x, p.y);
                context.stroke();
                
                if (p.x < 0 || p.x > screenWidth || p.y < 0 || p.y > screenHeight) {
                    initParticle(p);
                }
            }
            
            hueBase += 0.1;
            zoff += Configs.zInc;

            requestAnimationFrame(update);
        }

        /**
         * HSLA
         */
        function HSLA(h, s, l, a) {
            this.h = h || 0;
            this.s = s || 0;
            this.l = l || 0;
            this.a = a || 0;
        }

        HSLA.prototype.toString = function() {
            return 'hsla(' + this.h + ',' + (this.s * 100) + '%,' + (this.l * 100) + '%,' + this.a + ')';
        }

        /**
         * Particle
         */
        function Particle(x, y, color) {
            this.x = x || 0;
            this.y = y || 0;
            this.color = color || new HSLA();
            this.pastX = this.x;
            this.pastY = this.y;
        }

        init();
    }
}

</script>

<style scoped>

canvas{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index:0;
}
  
</style>
