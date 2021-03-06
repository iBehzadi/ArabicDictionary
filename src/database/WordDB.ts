import db from ".";

export async function WordDB_AddAll(word: IWord[]) {
  await db.word.bulkPut(word);
}

export async function WordDB_GetAll(CategoryID: number) {
  return await db.word.where('CategoryID').equals(CategoryID).toArray();
}

export async function WordDB_GetLimitWords(CategoryID: number, offset: number, limit: number) {
  return await db.word.where('CategoryID').equals(CategoryID).offset(offset).limit(limit).toArray();
}

export async function WordDB_GetWordByID(words: number[]) {
  return await db.word.where("WordID").anyOf(words).toArray();
}

export async function WordDB_RandomId(categoryID: number,) {
  let tempWordsArray = await db.word.where("CategoryID").equals(categoryID).toArray();
  let randomWords = [] as IWord[];
  for (let i = 0; i <= 3; i++) {
    randomWords[i] = tempWordsArray[Math.floor(Math.random() * tempWordsArray.length)];
  }
  tempWordsArray = [];
  return randomWords;
}
