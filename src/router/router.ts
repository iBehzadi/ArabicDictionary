import { createRouter, createWebHistory } from "vue-router";
import main from "../pages/MainPage.vue";
const routes = [
  {path: "/", name: "main", component: main},
  {
    path: "/Practice/:categoryID",
    name: "VocabularyPractice",
    component: () => import("@/pages/VocabularyPracticePage.vue")
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/pages/AboutUsPage.vue")
  },
  {
    path: "/bookmark",
    name: "bookmark",
    component: () => import("@/pages/BookmarkPage.vue")
  }
  ,
{
  //=> /words/:category
  path:"/Words/:id",
  name:"words",
  component: ()=> import("@/pages/WordsViewPage.vue")
},
{
  path:"/popular",
  name:"popular",
  component: ()=> import("@/pages/PopularSuggestions.vue")
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