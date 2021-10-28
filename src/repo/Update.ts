import { getUpdates_API } from "@/api/UpdateAPI";
import db from "@/database";
import { CategoryDB_AddAll } from "@/database/CategoryDB";
import { LastUpdate_Get } from "@/database/LastUpdateDB";
import { WordDB_AddAll } from "@/database/WordDB";
import { defineStore } from "pinia";
import { searchDB_AddWordsInDB } from "@/database/SearchDB";
export const useUpdateRepo = defineStore("UpdateDB", {
  state: () => {
    return {
      lastCheck: Date,
      Data: {} as Output,
    };
  },
  actions: {
    async LastUpdateCheked() {
      let lastUpdate = LastUpdate_Get();
      this.Data = await getUpdates_API(await lastUpdate.toString());
      if (this.Data.lastUpdate != 0) {
        CategoryDB_AddAll(this.Data.categories);
        WordDB_AddAll(this.Data.words);
        searchDB_AddWordsInDB(this.Data.words);
      };
    },
  },
});
