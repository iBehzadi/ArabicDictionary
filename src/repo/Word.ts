import { defineStore } from "pinia";
import { WordDB_GetAll }from "@/database/WordDB";
import { WordDB_RandomId }from "@/database/WordDB";
import {WordDB_GetWordBySearch } from "@/database/WordDB"
export const useWordRepo = defineStore('wordRepo', {
  state: () => {
    return {
      words:[] as IWord[],
      searchResult:[] as IWord[],
      randomWord:[] as IWord[]
    }
  },
  actions: {
    async getWordByCategory(CategoryID: number) {
      this.words = await WordDB_GetAll(CategoryID);
    },
    async getSearchResult(searchInput: string){
      this.searchResult = await WordDB_GetWordBySearch(searchInput);
    },
    async getWordByRandom(categoryID:number){
      this.randomWord = await WordDB_RandomId(categoryID);
        
    }


  }
});