import db from ".";

export async function BookmarksDB_ChangeStatusWord(Bookmark: IBookmark) {
  let wordStatus = await db.bookmark.where("WordID").equals(Bookmark.WordID).count();
  if (wordStatus == 1) {
    //Deleted
    db.bookmark.where("WordID").equals(Bookmark.WordID).delete();
  } else { 
    //Add to DB
     db.bookmark.put(Bookmark)
  }
}
export async function BookmarksDB_GetAll() {
  return await db.bookmark.toArray();
}
