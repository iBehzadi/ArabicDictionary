import { httpGet } from ".";

export async function getUpdates(lastUpdate: string | null) {
    if (lastUpdate == null)
        lastUpdate = '-1';
    
    return httpGet<Output>('/api/getUpdates.php?variant=normal&lastUpdate=' + lastUpdate);
}
type Output = {
    lastUpdate: number
    words: IWord[]
    categories: ICategory[]
}