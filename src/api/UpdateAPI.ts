import { LastUpdate_Get } from "@/database/LastUpdateDB";
import { httpGet } from ".";

export async function getUpdates_API() {
    let getLastUpdate = await LastUpdate_Get();
    return httpGet<Output>('/api/getUpdates.php?variant=normal&lastUpdate=' + getLastUpdate);
}

declare global {
    type Output = {
        lastUpdate: number
        words: IWord[]
        categories: ICategory[]
    }
}
