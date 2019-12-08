export default class RegionsService {
    baseUrl = `${process.env.REACT_APP_URL}api`;
    regionsList = '/regions';
    districtsList = '/regions/districts';

    async getResource(url) {
        const res = await fetch(`${this.baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

    async getRegionsList() {
        try {
            return await this.getResource(this.regionsList);

        }
        catch (error) {
            console.log(error);
        }
    }

    async getDistrictsList() {
        try{
            return await this.getResource(this.districtsList)
        }
        catch(err){
            console.log(err)
        }

    }

    
}
