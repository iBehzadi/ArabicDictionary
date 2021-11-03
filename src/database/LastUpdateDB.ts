import db from ".";

export async function LastUpdate_Add(lastUpdate: number) {
    db.lastUpdate.put({ LastUpdate: lastUpdate })
}

export async function LastUpdate_Get() {
    const result = await db.lastUpdate.toArray()
    if (!result || result.length == 0) return -1
    return result[0].LastUpdate
}