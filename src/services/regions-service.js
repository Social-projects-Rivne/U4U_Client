export default class RegionsService {
    baseUrl = `${process.env.REACT_APP_URL}api`;

    async getResource(url) {
        const res = await fetch(`${this.baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }
}
