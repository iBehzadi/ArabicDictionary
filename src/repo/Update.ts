import { getUpdates_API } from "@/api/UpdateAPI";
import db from "@/database";
import { LastUpdate_Get, UpdateCategory_DB, UpdateWord_DB } from "@/database/LastUpdateDB";
import { defineStore } from "pinia";

export const useUpdateDB = defineStore('UpdateDB', {
  state: () => {
    return {
      lastCheck: Date,
      Data: {} as Output,
    }
  },
  actions: {
    async LastUpdateCheked() {
let lastUpdate = LastUpdate_Get()
      this.Data = await getUpdates_API((await lastUpdate.toString()));
      if (this.Data.lastUpdate > 0) {
        UpdateCategory_DB(this.Data.categories);
        UpdateWord_DB(this.Data.words);


      }

    }
  }
});


