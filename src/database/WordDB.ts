import db from ".";

export async function WordDB_AddAll(word: IWord[]) {
  await db.word.bulkPut(word);
}

export async function WordDB_GetAll(CategoryID: number) {
  return await db.word.where('CategoryID').equals(CategoryID).toArray();
}

export async function WordDB_GetWordBySearch(searchInput: string) {
  return await db.word.where('Ar').startsWith(searchInput).toArray();
}

