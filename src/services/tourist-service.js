import request from "./request";

class TouristService {
    async login({email, password}) {
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

    async logOut() {
        const token = localStorage.getItem('token');
        return await request.post('log-out', { token })
    }

    async register({ nickName: nickname, ...other }) {
          try {
              const res = await request.post('register', {nickname, ...other});
              localStorage.setItem('token', res.accessToken);
              localStorage.setItem('refreshToken', res.refreshToken);
          } catch (e) {
              
          }
    }

    async getNickName(nickname) {
        return await request.get(`nickname/${nickname}`);
    }

    async getEmail(email) {
        return await request.get(`email/${email}`);
    }
};


export default new TouristService();
