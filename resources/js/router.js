import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import AboutMe from './pages/AboutMe.vue';
// import AboutMore from './pages/AboutMore.vue';
import Overlay from './pages/Overlay.vue';
import Experience from './pages/Experience.vue';
import Coding from './pages/Coding.vue';
import Graphics from './pages/Graphics.vue';
import AnimationTest from './pages/AnimationTest.vue';
import Contact from './pages/Contact.vue';
import PageNotFound from './pages/PageNotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: "/",
            name: 'home',
            title: 'Home',
            icon: "mdi-home",
            hidden: true,
            component: Home
        },
        {
            path: "/aboutme",
            name: "AboutMe",
            title: 'About Me',
            icon: "mdi-account",
            hidden: false,
            component: AboutMe
        },
        {
            path: "/experience",
            name: "experience",
            title: "Experience",
            icon: "mdi-briefcase-variant",
            hidden: false,
            component: Experience
        },
        {
            path: "/coding",
            name: "coding",
            title: "Coding",
            icon: "mdi-code-tags",
            hidden: false,
            component: Coding
        },
        {
            path: "/graphics",
            name: "graphics",
            title: "Graphics",
            icon: "mdi-panorama-outline",
            hidden: false,
            component: Graphics
        },
        {
            path: "/contact",
            name: "contact",
            title: "Contact",
            icon: "mdi-email",
            hidden: false,
            component: Contact,
            meta: { transitionName: 'slide' },
        },
        {
            path: "/animations",
            name: "animation",
            title: "Animation",
            icon: "mdi-draw-pen",
            hidden: false,
            component: AnimationTest,
            meta: { transitionName: 'slide' },
        },
        {
            path: "/:pathMatch(.*)*",
            name: "page-not-found",
            title: "Page Not Found",
            icon: "mdi-head-question-outline",
            hidden: true,
            component: PageNotFound,
            meta: { transitionName: `zoom` },
        }
    ],
    mode: 'history',
});
