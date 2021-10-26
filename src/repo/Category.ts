import { CategoryDB_GetAll } from "@/database/CategoryDB";
import { defineStore } from "pinia";

export const useCategoryRepo = defineStore('getCategory', {
  state: () => {
    return {
      category: [] as ICategory[],
      categoryByWCId:[] as ICategory[]
    }
  },
  actions: {
    async getAll() {
      this.category = await CategoryDB_GetAll();
    },
  }
});