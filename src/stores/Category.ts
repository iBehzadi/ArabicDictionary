import { defineStore } from "pinia";
import db from "./database";
import { ICategory } from "./database";

export const useCategoryDB = defineStore('CategoryDB', {
  state :()=> {
    return {
      category:[],
      Icon:[]
    }
  },
  actions: {
    async addAll(categories: ICategory[]) {
      const count = await db.category.bulkPut(categories);
      console.log('inserted ' + count);
    },
    getCategory(){
      db.category.orderBy('CategoryID').each((res) => {
        this.category.push(res.Title);
      })
    },
    getIcon(){
      db.category.orderBy('CategoryID').each((res) => {
        this.Icon.push(res.Icon);
      })
    }
  }
})