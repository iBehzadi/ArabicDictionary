import db from ".";
export function UpdateCategory_DB(res: ICategory) {
    db.category.add({
        CategoryID: res.CategoryID, CustomOrder: res.CustomOrder, Icon: res.Icon, IsFree: res.IsFree,
        LastUpdate: res.LastUpdate, SoundVersion: res.SoundVersion, Status: res.Status, Title: res.Title
    });
};
export function UpdateWord_DB(res: IWord) {
    db.word.add({
        Ar: res.Ar, CategoryID: res.CategoryID, Dialect: res.Dialect, Example: res.Example, Fa: res.Fa,
        LastUpdate: res.LastUpdate, ReferTo: res.ReferTo, SoundVersiona: res.SoundVersiona, Status: res.Status,
        Type: res.Type, WordID: res.WordID
    });
};

