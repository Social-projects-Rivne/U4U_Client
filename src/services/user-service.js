import Request from './request';
import TokenService from './token-service';

class UserService {
    getUserData = async () => {
        try {
            const token = TokenService.getToken();

            if(token) {
                return await Request.post('user', {"token": token});
            } else {
                return Promise.reject("Invalid access token");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async editUserData(body) {
        try {
            const token = TokenService.getToken();
            if (!token) throw new Error("illegal or missing token");

            return await Request.post('user/edit', body);
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default new UserService();
