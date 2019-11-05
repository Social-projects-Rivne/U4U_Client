import Request from './request';
const PLACES_URL = 'regions/districts/places';
const SEARCH_PARAM_URL = 'places/search';

class Api {
    getAllPlaces = async () => {
        try {
            return await Request.get(PLACES_URL);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    getPlace = async (id) => {
        try {
            return await Request.get(`${PLACES_URL}/${id}`);
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getSearchParameters = async (searchInput) => {
        try {
            return await Request.get(`${SEARCH_PARAM_URL}/${searchInput}`)
            
        } catch (error) {
            throw new Error(error.message)
        }
             
           

    
    }
}

export default new Api();
