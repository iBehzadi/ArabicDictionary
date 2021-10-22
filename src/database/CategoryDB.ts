import db from "."

export async function CategoryDB_getAll(){
     return db.category.orderBy('CategoryID').toArray()
      
  }


