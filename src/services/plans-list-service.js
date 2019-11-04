import request from "./request";

export default class PlansListService {
    baseUrl = `${process.env.REACT_APP_URL}api`;
    plansList = '/wishList';

    async getResource(url) {
        const res = await fetch(`${this.baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

    async getPlansList() {
        return await this.getResource(this.plansList);

    }

    async postWish(newComment) {
        try {
            return await request.post(this.plansList, newComment);

        }
        catch (error) {
            console.log(error);
        }
    }

    async deleteWish(_id) {

        try {
            return await request.delete(`${this.plansList}/${_id}`);
        }
        catch (error) {
            console.log(error)
        }
    }

    async markWish(marker) {
        try {
            await request.put(this.plansList, marker);
        }
        catch (error) {
            console.log(error)
        }
    }
}