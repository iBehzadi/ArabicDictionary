import { defineStore } from "pinia";
import { WordDB_GetWordBySearch, WordDB_RandomId, WordDB_GetAll } from "@/database/WordDB"
import { searchDB_GetSearchResult } from "@/database/SearchDB";

export const useWordRepo = defineStore('wordRepo', {
  state: () => {
    return {
      words: [] as IWord[],
      searchResult: [] as IWord[],
      randomWord: [] as IWord[],
      searchValue: "",

    }
  },
  actions: {
    async getWordByCategory(CategoryID: number) {
      this.words = await WordDB_GetAll(CategoryID);
    },
    async getWordByRandom(categoryID: number) {
      this.randomWord = await WordDB_RandomId(categoryID);

    },
    async getSearchResult(search_value: string) {
      this.searchValue = search_value;
      let result = await searchDB_GetSearchResult(this.searchValue);
      this.searchResult = await WordDB_GetWordBySearch(result)
    },
  },
})