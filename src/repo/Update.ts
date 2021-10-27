import { getUpdates_API } from "@/api/UpdateAPI";
import db from "@/database";
import { CategoryDB_AddAll } from "@/database/CategoryDB";
import { LastUpdate_Get } from "@/database/LastUpdateDB";
import { WordDB_AddAll } from "@/database/WordDB";
import { defineStore } from "pinia";

//use updatedb updateapi
export const useUpdateRepo = defineStore('getUpdateDB', {
  state: () => {
    return {
    }
  },
  actions: {
    async DB_Update() {
      let lastUpdate = await LastUpdate_Get();
      let result = await getUpdates_API(lastUpdate[0]);
      CategoryDB_AddAll(result.categories);
      WordDB_AddAll(result.words);
    }
  }
});


