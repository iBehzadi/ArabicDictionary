import db from ".";

export async function LastUpdate_Add(lastUpdate:ILastUpdate){
db.lastUpdate.put(lastUpdate)
}

export async function LastUpdate_Get(){
    return  await db.lastUpdate.toArray()

}