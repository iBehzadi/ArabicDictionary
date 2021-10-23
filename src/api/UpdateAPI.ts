import { httpGet } from ".";

export function getUpdates_API(lastUpdate: string | null) {
    if (lastUpdate == null) lastUpdate = '-1'


    return httpGet<Output>('/api/getUpdates.php?variant=normal&lastUpdate=' + lastUpdate)
}

declare global {
    type Output = {
        lastUpdate: number
        words: IWord[]
        categories: ICategory[]
    }
}
