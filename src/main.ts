import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/router";
import {createPinia} from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret,faBars,faSearch,faBookmark,faFlag,faTshirt,faClock,faCouch,faPalette,faBriefcaseMedical
 ,faUserNurse,faQuestion,faPen,faPlay} from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret,faBars,faSearch,faBookmark,faFlag,faTshirt,faClock,faCouch,faPalette,faBriefcaseMedical,
  faUserNurse,faQuestion,faPen,faPlay  );

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .mount('#app') 