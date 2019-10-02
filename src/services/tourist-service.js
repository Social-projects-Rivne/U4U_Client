
// Encapsulation all work with api
class TouristService {
    login(email, password) {
        return Promise.reject({ token: 'basdasd', expiresIn: 3600, user: {name: 'bob'} });
    }

    checkToken = async () => {
        return Promise.resolve({ status: 200 });
    };

    register(name, email, password) {
        // return
    }
};


export default new TouristService();
