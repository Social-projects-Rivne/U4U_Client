import Request from './request'

class Api {
    getAllPlaces = async () => {
        try {
            return await Request.get('regions/districts/places');
        } catch (error) {
            throw new Error(error.message);
        }
    };

    getPlace = async (id) => {
        try {
            return await Request.get('/regions/districts/places/' + id);
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new Api();
