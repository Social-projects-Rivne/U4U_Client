export default class SearchService {
  _apiBase = 'http://localhost:8080/api'

  async  getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    const body = await res.json()
    return body
  }

  async getSearchData() {
    const res = await this.getResourse('/search/')
    return res.map(this._transformSearchData)
  }
  async getSearchStar() {
    const res = await this.getResourse('/search/stars/')
    return res.map(this._transformSearchStar)
  }

  _transformSearchData = (place) => {
    return {
      id: place._id,
      name: place.name,
      districtId: place.districtId.name,
      regionId: place.regionId.name,
    }
  }
  _transformSearchStar = (star) => {
    return {
      id: star._id,
      stars: star.stars,
    }
  }
}