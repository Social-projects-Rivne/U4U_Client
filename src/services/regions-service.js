export default class RegionsService {
    baseUrl = 'http://localhost:8080/api';

    async getResource(url) {
        const res = await fetch(`${this.baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

    async getPlaces() {
        const url = "/regions/districts/places/5d8f8c7f0b43e2050ca9d448";
        const res = await this.getResource(url);
        return res;
    }

}
