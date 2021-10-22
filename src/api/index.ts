export function httpGet<T>(url: string): Promise<T> {
    return fetch(url)
        .then(Response => Response.json());
}