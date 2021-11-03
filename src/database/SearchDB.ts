import db from ".";

export async function searchDB_AddWordsInDB(word: IWord[]) {
  let allWords: ISearch[] = [];
  for (let i = 0; i < word.length; i++) {
    let wordList = [
      ...word[i].Ar.split(" "),
      ...word[i].Fa.split(" "),
      ...word[i].Example.split(" "),
    ];

    for (let j = 0; j < wordList.length; j++) {
      if (wordList[j].length >= 2) {
        let currentWords: ISearch = {
          Word: wordList[j],
          WordID: word[i].WordID,
        };
        allWords.push(currentWords);
      }
    }
  }
  await db.search.bulkPut(allWords);
}

export async function searchDB_GetSearchResult(searchValue: string) {
  return await db.search.where("Word").startsWith(searchValue).toArray();
}
