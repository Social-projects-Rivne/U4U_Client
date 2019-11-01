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
        const data = await this.getResource(this.plansList);
        return data;
    }

    async postWish(newComment) {
        try {
            await request.post(this.plansList, newComment);
            console.log(newComment)
        }
        catch (error) {
            console.log(error);
        }
    }

    async deleteWish(_id) {
        debugger
        console.log(_id)
        try {
            await request.delete(`${this.plansList}/${_id}`);
        }
        catch (error) {
            console.log(error)
        }
    }

    async markWishAsDone(doneState) {
        try {
            await request.put(this.plansList, doneState);
            console.log(doneState)
        }
        catch (error) {
            console.log(error)
        }
    }

}