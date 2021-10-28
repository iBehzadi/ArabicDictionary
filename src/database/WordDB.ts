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

export async function WordDB_RandomId(categoryID:number,) {
  let loghatRnd= await db.word.where("CategoryID").equals(categoryID).toArray()
 
  console.log(loghatRnd[ Math.floor(Math.random() * loghatRnd.length)]);
  return loghatRnd[ Math.floor(Math.random() * loghatRnd.length)]
    
  }
 