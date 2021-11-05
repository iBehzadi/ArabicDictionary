import { getUpdates_API } from "@/api/UpdateAPI";
import { CategoryDB_AddAll } from "@/database/CategoryDB";
import { LastUpdate_Add } from "@/database/LastUpdateDB";
import { WordDB_AddAll } from "@/database/WordDB";
import { defineStore } from "pinia";
import { searchDB_AddWordsInDB } from "@/database/SearchDB";


export const useUpdateRepo = defineStore('getUpdateDB', {
  state: () => {
    return {
    }
  },
  actions: {
    async DB_Update() {
      let result = await getUpdates_API();
      LastUpdate_Add(result.lastUpdate);
      CategoryDB_AddAll(result.categories);
      WordDB_AddAll(result.words);
      searchDB_AddWordsInDB(result.words);
    }
  }
})
