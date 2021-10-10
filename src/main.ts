import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/router";
import {createPinia} from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .mount('#app')
