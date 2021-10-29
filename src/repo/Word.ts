import { defineStore } from "pinia";
import { WordDB_GetAll }from "@/database/WordDB";
import { WordDB_RandomId }from "@/database/WordDB";
import {WordDB_getWordBySearch } from "@/database/WordDB"
export const useWordRepo = defineStore('getWords', {
  state: () => {
    return {
      words:[] as IWord[],
      searchResult:[] as IWord[],
      wordRnadom:[] as IWord[]
    }
  },
  actions: {
    async getWordByCategory(CategoryID: number) {
      this.words = await WordDB_GetAll(CategoryID);
    },
    async getSearchResult(searchInput: string){
      this.searchResult = await WordDB_getWordBySearch(searchInput);
    },
    async getWordByRandom(categoryID:number){
      this.wordRnadom = await WordDB_RandomId(categoryID);
        
    }


  }
});