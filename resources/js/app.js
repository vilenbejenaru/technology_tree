require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { createRouter } from "vue-router";
import Home from "./Pages/Home.vue";
import Tree from "./Pages/Tree.vue";
import About from "./Pages/About.vue";
import Frontend from "./Pages/Frontend.vue";
import Backend from "./Pages/Backend.vue";

const router = new VueRouter({
  mode: 'history',
  routes: [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tree",
    name: "Tree",
    component: Tree
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/frontend",
    name: "Frontend",
    component: Frontend
  },
  {
    path: "/backend",
    name: "Backend",
    component: Backend
  },
],
});

Vue.component('technology-tree-app', require('./components/TechnologyTreeApp.vue').default);

const app = new Vue({
  el: '#app',
  router,
});

export default router;