import db, { IWord, ICategory } from "@/database/WordDB"
import { useWordDB } from "@/repo/Word";
import { httpGet } from "@/api";
import { useCategoryDB } from "@/repo/Category";
let useWord = useWordDB();
let useCategory = useCategoryDB();
export function SetUpdateCategoryToDB(res:ICategory[]) {
useCategory.addAll(res);

};
export function SetUpdateWordToDB(res:IWord[]){
useWord.addAll(res)
};


//   //check localStorage
// let lastUpdate;
// if(localStorage.getItem("lastUpdate") != null) {
//   lastUpdate = localStorage.getItem("lastUpdate");
// } else {
//   lastUpdate = "-1";
// };

// // 
// if(lastUpdate>0){
//  const useWord = useWordDB();
//  useWord.addAll()
// }
// };

// type Output = {
//   lastUpdate: number
//   words: IWord[]
//   categories: ICategory[]
// };
