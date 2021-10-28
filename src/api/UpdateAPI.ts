import { LastUpdate_Add, LastUpdate_Get } from "@/database/LastUpdateDB";
import { httpGet } from ".";

export async function getUpdates_API(lastUpdate: ILastUpdate) {
    if (lastUpdate == null || undefined) {
        await LastUpdate_Add({
            LastUpdate: -1
        })
    }
    let getLastUpdate = await LastUpdate_Get();
    return httpGet<Output>('/api/getUpdates.php?variant=normal&lastUpdate=' + getLastUpdate[0].LastUpdate)
}

declare global {
    type Output = {
        lastUpdate: number
        words: IWord[]
        categories: ICategory[]
    }
}
