import { defineStore } from "pinia";
import db from "./database";
import { IWord } from "./database"
export const useWordDB = defineStore('WordDB', {
  state: () => {
    return {
      words:[]
    }
  },
  actions: {
    async addAll(word: IWord[]) {
      const count = await db.word.bulkPut(word);
      //console.log('inserted ' + count);
    },
    async getByCategory(CategoryId: number) {
      const words = await db.word
        .where('CategoryID')
        .equals(CategoryId)
        .each((res) => {
          
        })
    }
  }
})
