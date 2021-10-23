export async function httpGet<T>(url: string):Promise<T> {
    return await fetch(url)
        .then(Response => Response.json());
}