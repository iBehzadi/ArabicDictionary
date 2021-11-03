import db from ".";

export async function searchDB_AddWordsInDB(word: IWord[]) {

  for (let i = 0; i < word.length; i++) {
    let wordList = [
      ...word[i].Ar.split(" "),
      ...word[i].Fa.split(" "),
      ...word[i].Example.split(" "),
    ];

    let allWords: ISearch[] = [];
    for (let j = 0; j < wordList.length; j++) {
      if (wordList[j].length >= 2) {
        let currentWords: ISearch = {
          Word: wordList[j],
          WordID: word[i].WordID,
        };
        allWords.push(currentWords);
      }
    };
    await db.search.bulkPut(allWords);
  };
};

export async function searchDB_GetSearchResult(searchValue: string) {
  let tempArray: number[] = []
  await db.search.where("Word").startsWith(searchValue).each((res) => {
    tempArray.push(res.WordID);
  })
  let uniqueWordIDs: number[] = [];
  tempArray.forEach((c) => {
    if (!uniqueWordIDs.includes(c)) {
      uniqueWordIDs.push(c);
    }
  });
  return uniqueWordIDs
};
