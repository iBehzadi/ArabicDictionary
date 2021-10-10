import { createRouter, createWebHistory } from "vue-router";
import main from "../pages/MainPage.vue";

const routes = [
  {path: "/", name: "main", component: main}
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})
export default router