//Setting up database
import Dexie from "dexie";
var db = new Dexie("WordDatabase");
db.version(1).stores({
    category: "CategoryID,Title,Icon,CustomOrder,IsFree,LastUpdate,Status,ActiveInIraqDialect,ActiveInEmiratesDialect",
    words: "WordID,CategoryID,Fa,Ar,ReferTo,Example,Type,Dialect,LastUpdate,SoundVersion,Status"
});

export default db;
