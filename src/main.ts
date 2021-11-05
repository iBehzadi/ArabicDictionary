import { createApp } from 'vue';
import './style.css';
import { registerSW } from 'virtual:pwa-register'
import App from './App.vue';
import router from "./router/router";
import {createPinia} from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret,faUsers,faArrowRight,faBars,faBookmark,faSearch,faPen,faQuestion,faPlay,faLock} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle,faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import { registerSW  } from 'virtual:pwa-register'
import { clientsClaim } from 'workbox-core'

library.add(faUserSecret,faUsers,faLock,faArrowRight,faTimesCircle,faCheckCircle,faPlay,faUserSecret,faBars,faInstagram,faTelegramPlane,faBookmark,faSearch,faPen,faQuestion);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .mount('#app')
    
const intervalMS = 60 * 60 * 1000

const updateSW   = registerSW  ({

  onRegistered(r:any) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  },onOfflineReady(  ) {},  onNeedRefresh() {
    self.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING')
          self.skipWaiting()
      })},
 
})
