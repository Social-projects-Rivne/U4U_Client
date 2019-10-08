import request from "./request";

class TouristService {
    async login(email, password) {
           const res = await request.post('login', { email, password });
           localStorage.setItem('token', res.accessToken);
           localStorage.setItem('refreshToken', res.refreshToken);
    };

    async checkAuth() {
         if(!localStorage.getItem('token')) {
             return Promise.reject();
         }

            return await request.post('check-auth', {
                 token: localStorage.getItem('token')
             })
    };

    async register({ nickName: nickname, ...other }) {
           return  await request.post('register', {nickname, ...other});
    }
};


export default new TouristService();
