import { defineStore } from "pinia";
import db from "./database";
import { IWord } from "./database"
export const useWordDB = defineStore('WordDB', {
  actions: {
    async addAll(word: IWord[]) {
      const count = await db.word.bulkPut(word);
      console.log('inserted ' + count);
    }
  }
})