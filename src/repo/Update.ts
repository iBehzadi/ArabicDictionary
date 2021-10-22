import { defineStore } from "pinia";
import db from "@/database/WordDB";
import { IWord, ICategory } from "@/database/WordDB"
import { UpdateHttp_GetUpdates } from "@/database/UpdateDB";
export const useUpdateDB = defineStore('UpdateDB', {
  state: () => {
    return {
      lastCheck: Date,
    }
  },
  actions: {


  }
});

type Output = {
  lastUpdate: number
  words: IWord[]
  categories: ICategory[]
};