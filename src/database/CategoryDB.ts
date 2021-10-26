import db from "."

export function CategoryDB_AddAll(res: ICategory[]) {
   db.category.bulkPut(res)
};
export async function CategoryDB_GetAll(){
     return db.category.orderBy('CategoryID').toArray()
      
  }


