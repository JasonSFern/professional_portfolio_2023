import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import AboutMe from './pages/AboutMe.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';
import BetaTesting from './pages/BetaTesting.vue';
import ViewProject from './pages/ViewProject.vue';
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
            component: Home,
            meta: { transitionName: 'fade' },
        },
        {
            path: "/aboutme",
            name: "AboutMe",
            title: 'About Me',
            icon: "mdi-account",
            hidden: false,
            component: AboutMe,
            meta: { transitionName: 'fade' },
        },
        {
            path: "/projects",
            name: "projects",
            title: "Projects",
            icon: "mdi-code-tags",
            hidden: false,
            component: Projects,
            meta: { transitionName: 'fade' },
        },
        {   
            path: '/projects/:item_id',
            name: 'viewproject',
            title: "ViewProject",
            icon: "",
            hidden: true,
            component: ViewProject,
            meta: { transitionName: 'fade' },
            props(route) {
                let props = { ...route.params }
                props.item_id = props.item_id
                return props
            }
        },
        {
            path: "/contact",
            name: "Contact",
            title: 'Contact',
            icon: "mdi-card-account-details",
            hidden: false,
            component: Contact,
            meta: { transitionName: 'fade' },
        },
        {
            path: "/beta-testing",
            name: "beta-testing",
            title: "Beta Testing",
            icon: "mdi-draw-pen",
            hidden: true,
            component: BetaTesting,
            meta: { transitionName: 'fade' },
        },
        {
            path: "/:pathMatch(.*)*",
            name: "page-not-found",
            title: "Page Not Found",
            icon: "mdi-head-question-outline",
            hidden: true,
            component: PageNotFound,
            meta: { transitionName: `fade` },
        }
    ],
    mode: 'history',
});
