export default class getRegions{
    baseUrl = 'http://localhost:8080/api/regions/districts';

    async getResource(url){
        const res = await fetch(`${this.baseUrl}`);

        
      if(!res.ok){
           throw new Error(`Cound not fetch ${url} reseived ${res.status}`);
       }
       return await res.json();
    }
}
