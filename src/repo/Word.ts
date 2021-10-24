import { defineStore } from "pinia";
import { WordDB_getAll }from "@/database/WordDB";
import {WordDB_getSearchResult } from "@/database/WordDB"
export const useWordRepo = defineStore('getWords', {
  state: () => {
    return {
      words:[] as IWord[],
      searchResult:[] as IWord[]
    }
  },
  actions: {
    async getWordByCategory(CategoryID: number){
      this.words = await WordDB_getAll(CategoryID);
    },
    async getSearchResult(searchInput: string){
      this.searchResult = await WordDB_getSearchResult(searchInput);
    }
  }
});