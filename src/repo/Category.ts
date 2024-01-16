import { defineStore } from "pinia";
import { CategoryDB_GetAll } from "@/database/CategoryDB";

export const useCategoryRepo = defineStore('categoryRepo', {
  state: () => {
    return {
      category: [] as ICategory[],
    }
  },
  actions: {
    async getAll() {
      this.category = await CategoryDB_GetAll();
    },
  }
});

