import request from "./request";

class TouristService {
    login = async (email, password) => {
           const res = await request.post('login', { email, password });
           localStorage.setItem('token', res.accessToken);
           localStorage.setItem('refreshToken', res.refreshToken);
    };

    checkAuth = async () => {
         if(!localStorage.getItem('token')) {
             return Promise.reject();
         }

            return await request.post('check-auth', {
                 token: localStorage.getItem('token')
             })
    };

    register(name, email, password) {
        // return
    }
};


export default new TouristService();
