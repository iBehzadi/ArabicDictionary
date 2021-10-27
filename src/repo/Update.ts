import { getUpdates_API } from "@/api/UpdateAPI";
import db from "@/database";
import { CategoryDB_AddAll } from "@/database/CategoryDB";
import { LastUpdate_Get } from "@/database/LastUpdateDB";
import { WordDB_AddAll } from "@/database/WordDB";
import { defineStore } from "pinia";

export const useUpdateRepo = defineStore('UpdateDB', {
  state: () => {
    return {
    }
  },
  actions: {
    async LastUpdateCheked() {
      let lastUpdate = await LastUpdate_Get();
      let result = await getUpdates_API(lastUpdate[0]);
      CategoryDB_AddAll(result.categories);
      WordDB_AddAll(result.words);
    }
  }
});


