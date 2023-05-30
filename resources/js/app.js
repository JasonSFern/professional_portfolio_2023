
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import router from './router';
import App from './layouts/App.vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { store } from "./store/store.js";

import $ from 'jquery';
import jQuery from 'jquery'

gsap.registerPlugin(ScrollTrigger);

Vue.mixin({
    created: function () {
        this.gsap = gsap;
    }
});

import Vue from 'vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import VueCookies from 'vue-cookies'
Vue.use(VueParticles)
Vue.use(VueCookies, { expires: -1})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const maxRotationDegrees = 20;

const app = new Vue({
    router,
    el: '#app',
    vuetify,
    store: store,
    data: {
        rotX: 0,
        rotY: 0
    },
    methods: {
        mouseMoved (e) {
          // This gives us a number between -1 and 1
          const mousePercX = (e.pageX / document.body.clientWidth) * 2 - 1
          const mousePercY = (e.pageY / document.body.clientHeight) * 2 - 1
          
          this.gsap.to(this, 0.5, {
            rotX: mousePercX * maxRotationDegrees,
            rotY: mousePercY * -maxRotationDegrees
          })
        }
    },
    render: h => h(App)
});







