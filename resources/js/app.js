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
  // {
  //   path: "/fullstack",
  //   name: "Fullstack",
  //   component: Fullstack
  // },
  // {
  //   path: "/faq",
  //   name: "Faq",
  //   component: Faq
  // },
  // {
  //   path: "/study",
  //   name: "Study",
  //   component: Study
  // },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: Blog
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: Register
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: Login
  // },
],
});

Vue.component('technology-tree-app', require('./components/TechnologyTreeApp.vue').default);
// Vue.component('example-component', require('./components/ExampleComponent').default);

const app = new Vue({
  el: '#app',
  router,
});

export default router;
