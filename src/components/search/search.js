import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import SearchService from '../../services/search-services'

export default class Search extends Component {
  searchService = new SearchService()

  state = {
    placesList: [],
    districtsList: [],
    regionsList: [],
    reviewsList: [],
    searchStatus: false,
    looking: ''
  }

  componentDidMount() {
    Promise.all([
      this.searchService.getAllPlaces(),
      this.searchService.getAllDistricts(),
      this.searchService.getAllRegions(),
      this.searchService.getAllReviews()
    ])
      .then(([ places, district, region, review ]) => {
        this.setState({
          placesList: places,
          districtsList: district,
          regionsList: region,
          reviewsList: review
        })
      })
  }

  searchHandler = (e) => {
    this.setState({
      searchStatus: (e.target.value !== '') ? true : false,
      looking: e.target.value
    })
  }

  renderPlaces(arr) {
    return arr
      .filter((place) => place.name
        .toLowerCase()
        .match(this.state.looking.toLowerCase()))
      .map((p) => {
        const district = (this.state.districtsList.filter(({ id }) => id === p.districtId))[0].name
        const region = (this.state.regionsList.filter(({ id }) => id === p.regionId))[0].name

        return (
          <li key={p.id}>
            <Link to="/singleplace/5" >
              <span>{p.name}</span>
              {region} Region, {district} District.
            </Link>
          </li>
        )
      })
  }

  renderPopular(arr) {
    return arr
      .slice(0, 5)
      .map((p) => {
        return (
          <li key={p.id}>
            <Link to="singleplaces/5">
              - {p.name}<span>4.2 stars</span>
            </Link>
          </li>
        )
      })
  }

  render() {
    const { searchStatus, placesList } = this.state
    const results = (searchStatus) ? ' results' : ''
    const places = this.renderPlaces(placesList)
    const popular = this.renderPopular(placesList)

    return (
      <div className="search" >
        <div className="search__wrapper">
          <div className={`search__fields${results}`}>
            <div className="search__find">
              <input type="text"
                placeholder="Find your favorite place"
                onChange={this.searchHandler} />
            </div>

            <div className="search__results">
              <ul>
                {places}
              </ul>
            </div>
          </div>
        </div>

        <div className="search__more">
          <div className="search__random">
            <FontAwesomeIcon icon={faRandom} />
            Press and see an interesting random place
          </div>

          <div className="search__popular">
            <h2>
              <FontAwesomeIcon icon={faMedal} />
              Popular places:
            </h2>

            <ul>
              {popular}
              {/* <li>
                <Link to="singleplaces/5">
                  - Popular place <span>4.2 <FontAwesomeIcon icon={faStar} /></span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
