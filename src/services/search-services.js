import Request from "./request";

export default class SearchService {
  getSearchData = async data => {
    try {
      const res = await Request.get(`/search?q=${data}`);
      return res.map(this._transformSearchData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getSearchStar = async () => {
    try {
      const res = await Request.get("/search/stars/");
      return res.map(this._transformSearchStar);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getRandomPlace = async () => {
    try {
      const res = await Request.get("/search/random/");
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  _transformSearchData = place => {
    return {
      id: place._id,
      name: place.name,
      districtId: place.districtId.name,
      regionId: place.regionId.name
    };
  };
  _transformSearchStar = star => {
    return {
      id: star._id,
      rating: star.ratingAvg,
      name: star.name
    };
  };
}
