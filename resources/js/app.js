import Vue from 'vue';

import 'bootstrap';
import store from './store';
import { router } from './router';

// import {ValidationProvider  } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
Vue.component('technology-tree-app', require('./components/TechnologyTreeApp.vue').default);

const app = new Vue({
  el: '#app',
  router,
  store,
});
