import request from "./request";

class reviewServise{

    async comment({ userJwt, comment, placeId, rating }){
        const res = await request.post('reviews', {userJwt, comment, placeId, rating})
    }
}

export default new reviewServise();