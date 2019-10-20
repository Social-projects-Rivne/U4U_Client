import TokenService from './token.service'
import Request from './request'

class Api {
    constructor() {
        this.token = TokenService.getToken();
    }

    getAllPlaces = async () => {
        try {
            return await Request.get('regions/districts/places', {token: this.token});
        } catch (error) {
            throw new Error(error);
        }
    };

    getAllRegions = async () => {
        try {
            return await Request.get('regions', {token: this.token});
        } catch (error) {
            throw new Error(error);
        }
    };
}

export default new Api();
