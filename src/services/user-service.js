import Request from './request';
import TokenService from './token-service';

class UserService {
    getUserData = async () => {
        try {
            const token = TokenService.getToken();

            if(token) {
                return await Request.post('/user', {"token": token});
            } else {
                return Promise.reject("Invalid access token");
            }
        } catch (error) {
            console.log(error)
            throw new Error(error.message);
        }
    };
}

export default new UserService();