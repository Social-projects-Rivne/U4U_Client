import request from './request';

class reviewServise {
  async comment({ userJwt, comment, placeId, rating }) {
    const res = await request.post('reviews', {
      userJwt,
      comment,
      placeId,
      rating
    });
  }

  getAllComments = async (commentId) => {
    try {
      const reviews = await request.get(`reviews/${commentId}`);
      return reviews;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export default new reviewServise();
