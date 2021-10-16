import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/router";
import {createPinia} from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret ,faArrowRight,faBars} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle,faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
library.add(faUserSecret,faArrowRight,faTimesCircle,faCheckCircle,faUserSecret,faBars,faInstagram,faTelegramPlane);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .mount('#app') 