import db from ".";

export async function WordDB_addAll(word: IWord[]) {
  await db.word.bulkPut(word);
}

export async function WordDB_getAll(CategoryID: number) {
  return await db.word.where('CategoryID').equals(CategoryID).toArray();
}

export async function WordDB_getSearchResult(searchInput: string) {
  return await db.word.where('Fa').startsWith(searchInput).toArray();
}

