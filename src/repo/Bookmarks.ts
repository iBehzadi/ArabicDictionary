import {
  BookmarksDB_ChangeStatusWord,
  BookmarksDB_GetAll,
} from "@/database/BookmarksDB";
import { defineStore } from "pinia";

export const useBookmarksRepo = defineStore("Bookmarks", {
  state: () => {
    return {};
  },
  actions: {
    Bookmarks_ChangeStatusWord(WordID: number) {
      let i = { WordID: WordID };
      BookmarksDB_ChangeStatusWord(i);
    },
    async Bookmarks_GetAll() {
      BookmarksDB_GetAll();
    },
  },
});
