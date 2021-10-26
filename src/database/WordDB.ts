import db from ".";

export function WordDB_AddAll(res: IWord[]) {
  db.word.bulkPut(res);
};