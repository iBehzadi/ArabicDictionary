import { defineStore } from "pinia";
import db from "./database";
import { ICategory } from "./database";

export const useCategoryDB = defineStore('CategoryDB', {
  state: () => {
    return {
      categoryTitle: [],
      categoryID: [],
      Icon: []
    }
  },
  actions: {
    async addAll(categories: ICategory[]) {
      const count = await db.category.bulkPut(categories)
        .catch((e) => {
          console.log("oops: " + e);
        });
      //console.log('inserted ' + count);
    },
    getCategory() {
      db.category.orderBy('CategoryID').each((res) => {
        this.categoryTitle.push(res.Title);
        this.categoryID.push(res.CategoryID);
        this.Icon.push(res.Icon);
      })
    },
  }
})