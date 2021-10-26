import { defineStore } from "pinia";
import { getUpdates } from "@/api/UpdateAPI";
import { CategoryDB_AddAll } from "@/database/CategoryDB";
import { WordDB_AddAll } from "@/database/WordDB";
import {useCategoryRepo} from "@/repo/Category"

//use updatedb updateapi
export const useUpdateRepo = defineStore('getUpdateDB', {
  state: () => {
    return {

    }
  },
  actions: {
    async DB_Update() {
      let result = await getUpdates("-1");
      CategoryDB_AddAll(result.categories);
      WordDB_AddAll(result.words);
      useCategoryRepo().getAll();
    },
  }
});
