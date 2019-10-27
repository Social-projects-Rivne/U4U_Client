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

  async getAllPlaces() {
    const res = await this.getResourse('/regions/districts/places/')
    return res.map(this._transformPlaces)
  }
  async getAllDistricts() {
    const res = await this.getResourse(`/regions/districts/`)
    return res.map(this._transformDistricts)
  }
  async getAllRegions() {
    const res = await this.getResourse(`/regions/`)
    return res.map(this._transformRegions)
  }
  async getAllReviews() {
    const res = await this.getResourse(`/reviews/`)
    return res.map(this._transformReviews)
  }

  _transformPlaces = (place) => {
    return {
      id: place._id,
      name: place.name,
      districtId: place.districtId,
      regionId: place.regionId,
      reviewsId: place.reviewsId
    }
  }
  _transformDistricts = (district) => {
    return {
      id: district._id,
      name: district.name
    }
  }
  _transformRegions = (region) => {
    return {
      id: region._id,
      name: region.name
    }
  }
  _transformReviews = (review) => {
    return {
      id: review._id,
      stars: review.rating
    }
  }
}