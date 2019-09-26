
// Encapsulation all work with api
class TouristService {
    getUser(id) {
        return Promise.resolve({ name: 'Bob', surname: 'Brown', age: 20 });
    }
};


export default TouristService;