import db from "."

export async function CategoryDB_addAll(category: ICategory[]) {
   await db.category.bulkPut(category);
}

export async function CategoryDB_getAll() {
   return db.category.orderBy('CategoryID').toArray();
}
