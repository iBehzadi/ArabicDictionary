import { httpGet } from ".";

export function getUpdates(lastUpdate: string | null) {
    if (lastUpdate == null) lastUpdate = '-1'
    type Output = {
        lastUpdate: number
        words: IWord[]
        categories: ICategory[]
    };

    return httpGet<Output>('/api/getUpdates.php?variant=normal&lastUpdate=' + lastUpdate)
}


