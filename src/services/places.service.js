import Request from './request'

class Api {
    getAllPlaces = async () => {
        try {
            return await Request.get('regions/districts/places');
        } catch (error) {
            throw new Error(error);
        }
    };
}

export default new Api();
