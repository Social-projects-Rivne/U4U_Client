export default class RegionsService {
    baseUrl = '/api';

    async getResource(url) {
        const res = await fetch(`${this.baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

    async getPlaces() {
        const res = await this.getResource(`/regions/5d8a27cdfb4417205498e609/places`);
        return res;
    }

}