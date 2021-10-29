import db from ".";

export async function WordDB_AddAll(word: IWord[]) {
  await db.word.bulkPut(word);
}

export async function WordDB_GetAll(CategoryID: number) {
  return await db.word.where('CategoryID').equals(CategoryID).toArray();
}

export async function WordDB_getWordBySearch(searchInput: string) {
  return await db.word.where('Ar').startsWith(searchInput).toArray(); 
}

export async function WordDB_RandomId(categoryID:number,) {
  let loghatRnd= await db.word.where("CategoryID").equals(categoryID).toArray()

  let fourWord=[] as IWord[]
  for (let i=0 ;i <=3 ; i++ ){
    
   fourWord[i]=loghatRnd[Math.floor(Math.random() * loghatRnd.length)]

  }
  return fourWord  
    }
 