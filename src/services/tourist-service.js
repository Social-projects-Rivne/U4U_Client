import request from "./request";

class TouristService {
    login = async (email, password) => {
       try {
           const res = await request.post('login', { email, password });
           console.log(res);
           localStorage.setItem('token', res.accessToken);
           localStorage.setItem('refreshToken', res.refreshToken);
           return await Promise.resolve();
       } catch (err) {
           return await Promise.reject(err);
       }
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
