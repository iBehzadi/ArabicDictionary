import {
  BookmarksDB_ChangeStatusWord,
  BookmarksDB_GetAll,
} from "@/database/BookmarksDB";
import { defineStore } from "pinia";

export const useBookmarksRepo = defineStore("Bookmarks", {
  state: () => {
    return {
      bookmarks: [] as number[],
    };
  },
  actions: {
    Bookmarks_ChangeStatusWord(WordID: number) {
      let i = { WordID: WordID };
      BookmarksDB_ChangeStatusWord(i);
    },
    async Bookmarks_GetAll() {
      let bookmarksWord = await BookmarksDB_GetAll();
      this.bookmarks = bookmarksWord.map((x) => x.WordID);
    },
  },
});
