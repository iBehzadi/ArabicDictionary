import { createRouter, createWebHistory } from "vue-router";
import main from "../pages/MainPage.vue";
import tarjome from "../components/pageLoghat.vue"
const routes = [
  {path: "/", name: "main", component: main},
  {path:"/tarjome",name:'tarjome',component:tarjome}
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})
export default router