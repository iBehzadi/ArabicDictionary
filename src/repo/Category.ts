import { CategoryDB_getAll } from "@/database/CategoryDB";
import { defineStore } from "pinia";
import db from "./database";
import { ICategory } from "./database";


export const useCategoryDB = defineStore('CategoryDB', {
  state :()=> {
    return {
      category:[] as ICategory[],
    }
  },
  actions: {
    
async getAll(){
  this.category = await CategoryDB_getAll()
}
   
  }
})