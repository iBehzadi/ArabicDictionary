import db from ".";

async addAll(word: IWord[]) {
    const count = await db.word.bulkPut(word);
    console.log('inserted ' + count);
  }