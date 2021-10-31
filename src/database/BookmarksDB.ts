import db from ".";

export async function BookmarksDB_ChangeStatusWord(WordID: number) {
  let wordStatus = await db.bookmark.where("WordID").equals(WordID).toArray;
  if (wordStatus != null) {
    //Deleted
    db.bookmark.where("WordID").equals(WordID).delete;
  } else {
    //Add to DB
    // db.bookmark.bulkPut(WordID)
  }
}
export async function BookmarksDB_GetAll() {
  return await db.bookmark.toArray;
}
