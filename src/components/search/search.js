import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
  state = {
    searching: false
  }

  searchHandler = (e) => {
    this.setState({
      searching: (e.target.value !== '') ? true : false
    })
  }

  render() {
    const { searching } = this.state
    const results = (searching) ? ' results' : ''

    return (
      <div className="search" >
        <div className="search__wrapper">
          <div className={`search__fields${results}`}>
            <div className={`search__find`}>
              <input type="text"
                placeholder="Find your favorite place"
                onChange={this.searchHandler} />
            </div>

            <div className={`search__results`}>
              <ul>
                <li>
                  <Link to="/singleplace/5" >
                    <span>Place name</span>
                    Where is this place
                </Link>
                </li>
                <li>
                  <Link to="/singleplace/5" >
                    <span>Place name</span>
                    Where is this place
                </Link>
                </li>
                <li>
                  <Link to="/singleplace/5" >
                    <span>Place name</span>
                    Where is this place
                </Link>
                </li>
                <li>
                  <Link to="/singleplace/5" >
                    <span>Place name</span>
                    Where is this place
                </Link>
                </li>
                <li>
                  <Link to="/singleplace/5" >
                    <span>Place name</span>
                    Where is this place
                </Link>
                </li>

                <li>
                  <Link to="/singleplace/5" >
                    <span>Place name</span>
                    Where is this place
                </Link>
                </li>

                <li>
                  <Link to="/singleplace/5" >
                    <span>Place name</span>
                    Where is this place
                </Link>
                </li>
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
              <li>
                <Link to="singleplaces/5">
                  - Popular place <span>5 stars</span>
                </Link>
              </li>
              <li>
                <Link to="singleplaces/5">
                  - Popular place <span>4.9 stars</span>
                </Link>
              </li>
              <li>
                <Link to="singleplaces/5">
                  - Popular place <span>4.6 stars</span>
                </Link>
              </li>
              <li>
                <Link to="singleplaces/5">
                  - Popular place <span>4.3 stars</span>
                </Link>
              </li>
              <li>
                <Link to="singleplaces/5">
                  - Popular place <span>4.2 stars</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Search