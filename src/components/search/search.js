import React, { Component } from 'react';
import './search.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import SearchService from '../../services/search-services'

export default class Search extends Component {
  searchService = new SearchService()

  state = {
    searchData: [],
    popularData: [],
    randomId: [],
    searchStatus: false,
  }

  componentDidMount() {
    Promise.all([
      this.searchService.getSearchStar(),
      this.searchService.getRandomPlace(),
    ])
    .then(([star, random]) => {
      this.setState({
        popularData: star,
        randomId: random[0].id,
      })
    })
  }

  searchHandler = (e) => {
    clearTimeout(this.timeout)

    const inputData = e.target.value
    if (inputData !== '') {
      this.timeout = setTimeout(() => {
        this.searchService.getSearchData(inputData)
          .then((search) => {
            this.setState({
              searchData: search,
              searchStatus: true,
            })
          })
      }, 1000)
    } else {
      this.setState({
        searchStatus: false,
      })
    }
  }

  renderPlaces(arr) {
    const { searchStatus, searchData } = this.state
    if (searchStatus && !searchData.length) {
      return (
        <li className="search__results_nothing">
          We didn't find anything...
        </li>
      )
    } else {
      return arr
        .map((p) => {
          return (
            <li key={p.id}>
              <Link to={`/singleplace/${p.id}`} >
                <span>{p.name}</span>
                {p.regionId} Region, {p.districtId} District.
            </Link>
            </li>
          )
        })
    }
  }

  renderPopular(arr) {
    return arr
      .map((p) => {
        return (
          <li key={p.id}>
            <Link to={`singleplace/${p.id}`}>
              - {p.name}<span><FontAwesomeIcon icon={faStar} /> <span className="search-popular-places-rating">{p.rating.toFixed(1)}</span></span>
            </Link>
          </li>
        )
      })
  }

  renderRandomPlace(arr) {
    let newArr = []
    arr.map((place) => {
      return newArr.push(place.id)
    })
    return newArr
  }

  render() {
    const { searchStatus, searchData, popularData, randomId } = this.state;
    const results = (searchStatus) ? ' results' : '';
    const places = this.renderPlaces(searchData);
    const popular = this.renderPopular(popularData);

    return (
      <div className="search-container">
        <div className="search">
          <div className={"search__wrapper " + (results ? "search__wrapper_shadow" : "")}>
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
              <Link to={`/singleplace/${randomId}`}>
                <FontAwesomeIcon icon={faRandom} />
                Press and see an interesting random place
              </Link>
            </div>

            <div className="search__popular">
              <h2>
                <FontAwesomeIcon icon={faMedal} />
                Popular places:
              </h2>

              <ul>
                {popular}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
