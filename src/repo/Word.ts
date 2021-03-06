import { defineStore } from "pinia";
import {
  WordDB_RandomId,
  WordDB_GetAll,
  WordDB_GetWordByID,
  WordDB_GetLimitWords,
} from "@/database/WordDB";
import { searchDB_GetSearchResult } from "@/database/SearchDB";
import { BookmarksDB_GetWordIDs } from "@/database/BookmarksDB";

export const useWordRepo = defineStore("wordRepo", {
  state: () => {
    return {
      words: [] as IWord[],
      searchResult: [] as IWord[],
      randomWord: [] as IWord[],
      searchValue: "",
      bookmarkWords: [] as IWord[],
    };
  },
  actions: {
    async getWordByCategory(CategoryID: number) {
      this.words = await WordDB_GetAll(CategoryID);
    },
    async getLimitWordByCategory(CategoryID: number, offset: number, limit: number) {
      this.words = this.words.concat(await WordDB_GetLimitWords(CategoryID, offset, limit));
    },
    async getWordByRandom(categoryID: number) {
      this.randomWord = await WordDB_RandomId(categoryID);
    },
    async getSearchResult(search_value: string) {
      this.searchValue = search_value;
      let result = await searchDB_GetSearchResult(search_value);
      this.searchResult = await WordDB_GetWordByID(result);
    },
    async getBookmarkWords() {
      let result = await BookmarksDB_GetWordIDs();
      this.bookmarkWords = await WordDB_GetWordByID(result);
    },
  },
});
