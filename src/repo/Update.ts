import { getUpdates_API } from "@/api/UpdateAPI";
import db from "@/database";
import { UpdateCategory_DB, UpdateWord_DB } from "@/database/UpdateDB";
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
      this.Data = await getUpdates_API(db.lastUpdate + '');
      if (this.Data.lastUpdate > 0) {
        // UpdateCategory_DB(this.Data.categories.values);
        // UpdateWord_DB(this.Data.words.);

      }

    }
  }
});

