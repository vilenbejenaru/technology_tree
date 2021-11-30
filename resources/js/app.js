import "bootstrap/dist/css/bootstrap.min.css";
require('./bootstrap');


import { createApp } from 'vue';

import TechnologyTreeApp from  './components/TechnologyTreeApp.vue';

createApp({
    components: {
        TechnologyTreeApp
    }
}).mount('#app')
