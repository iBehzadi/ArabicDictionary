import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/router";
import {createPinia} from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret ,faArrowRight,faCheckCircle,} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle} from '@fortawesome/free-regular-svg-icons';
library.add(faUserSecret,faArrowRight,faTimesCircle,faCheckCircle,);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .mount('#app')
