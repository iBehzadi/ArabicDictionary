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
      BookmarksDB_ChangeStatusWord(WordID);
    },
    async Bookmarks_GetAll() {
      BookmarksDB_GetAll();
    },
  },
});
