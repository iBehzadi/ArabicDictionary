import { defineStore } from "pinia";
import { getUpdates } from "@/api/UpdateAPI";
import { CategoryDB_addAll } from "@/database/CategoryDB";
import { WordDB_addAll } from "@/database/WordDB";


//use updatedb updateapi
export const useUpdateRepo = defineStore('getUpdateDB', {
  state: () => {
    return {

    }
  },
  actions: {
    async DB_Update() {
      let result = await getUpdates("-1");
      CategoryDB_addAll(result.categories);
      WordDB_addAll(result.words);
    },
  }
});
