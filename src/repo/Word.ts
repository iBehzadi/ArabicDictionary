import { defineStore } from "pinia";
import { WordDB_GetAll }from "@/database/WordDB";
import {WordDB_GetSearchResult } from "@/database/WordDB"
export const useWordRepo = defineStore('getWords', {
  state: () => {
    return {
      words:[] as IWord[],
      searchResult:[] as IWord[]
    }
  },
  actions: {
    async getWordByCategory(CategoryID: number){
      this.words = await WordDB_GetAll(CategoryID);
    },
    async getSearchResult(searchInput: string){
      this.searchResult = await WordDB_GetSearchResult(searchInput);
    }
  }
});