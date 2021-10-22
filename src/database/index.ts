//Setting up database
import Dexie from "dexie";

class WordDatabase extends Dexie {
    word: Dexie.Table<IWord, number>; // number = type of the primkey
    category: Dexie.Table<ICategory, number>;
    constructor() {
        super("WordDatabase");
        this.version(1).stores({
            category: "CategoryID,Title,IsFree,LastUpdate,Status",
            word: "WordID,CategoryID,Fa,Ar,ReferTo,Dialect,LastUpdate"
        });
        this.word = this.table("word");
        this.category = this.table("category");
    }
}

let db = new WordDatabase()

export default db

declare global {
    interface IWord {
        WordID: number,
        CategoryID: number,
        Fa: string,
        Ar: string,
        ReferTo: number,
        Example: string,
        Type: number,
        Dialect: number,
        LastUpdate: number,
        SoundVersiona: number,
        Status: string,
    }
    interface ICategory {
        CategoryID: number,
        Title : string,
        Icon: string,
        CustomOrder: number,
        IsFree: number,
        LastUpdate: number,
        SoundVersion: number,
        Status: number
    }
}
