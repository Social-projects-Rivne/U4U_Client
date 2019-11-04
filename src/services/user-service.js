import Request from './request';

class Api {
  getUserData = async () => {
    try {
      const userData = await Request.post('user');
      return userData;
    } catch(err) {
      console.log(err);
    }
  }
}

export default new Api();