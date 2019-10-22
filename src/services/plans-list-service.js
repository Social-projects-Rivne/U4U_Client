export default class PlansListService{
    baseUrl = `${process.env.REACT_APP_URL}api`;
    plansList = '/wishList';

       async getResource(url) {
        const res = await fetch(`${this.baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

      async getPlansList(){
          const data = await this.getResource(this.plansList);
          return data;
      }     
    
}