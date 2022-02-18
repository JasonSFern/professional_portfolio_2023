import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import AboutMe from './pages/AboutMe.vue';
import Experience from './pages/Experience.vue';
import Projects from './pages/Projects.vue';
import AnimationTest from './pages/AnimationTest.vue';
import ViewProject from './pages/ViewProject.vue';
import Contact from './pages/Contact.vue';
import PageNotFound from './pages/PageNotFound.vue';
// import Overlay from './pages/Overlay.vue';

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
            path: "/projects",
            name: "projects",
            title: "Projects",
            icon: "mdi-code-tags",
            hidden: false,
            component: Projects
        },
        {   
            path: '/projects/:item_id',
            name: 'viewproject',
            title: "ViewProject",
            icon: "",
            hidden: true,
            component: ViewProject,
            props(route) {
                let props = { ...route.params }
                props.item_id = parseInt(props.item_id)
                return props
            }
        },
        {
            path: "/contact",
            name: "contact",
            title: "Contact",
            icon: "mdi-email",
            hidden: false,
            component: Contact,
            meta: { transitionName: 'fade' },
        },
        {
            path: "/animations",
            name: "animation",
            title: "Animation",
            icon: "mdi-draw-pen",
            hidden: true,
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
