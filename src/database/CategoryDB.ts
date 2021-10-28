import db from "."

export async function CategoryDB_AddAll(category: ICategory[]) {
   await db.category.bulkPut(category);
}

export async function CategoryDB_GetAll() {
   return db.category.orderBy('CustomOrder').toArray();
}
