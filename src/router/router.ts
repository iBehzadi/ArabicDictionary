import { createRouter, createWebHistory } from "vue-router";
import main from "../pages/MainPage.vue";
const routes = [
  {path: "/", name: "main", component: main},
  {
    path: "/Practice",
    name: "VocabularyPractice",
    component: () => import("@/pages/VocabularyPracticePage.vue")
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/pages/AboutUsPage.vue")
  }
,
{
  //=> /words/:category
  path:"/Words",
 name:"words",
  component: ()=> import("@/pages/pageLoghat.vue")
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 ,  margin: 0,
      padding: 0}
  }
})
export default router