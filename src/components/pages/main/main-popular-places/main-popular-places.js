import React, { Component } from 'react';
import PlacesGrig from './../../../utils/places-grid';
import Spinner from './../../../utils/spinner';
import SearchService from './../../../../services/search-services';
import './main-popular-places.scss';


export default class MainPopularPlaces extends Component {
  constructor (props) {
    super (props);

    this.state = {
      places: null,
      searchService: new SearchService()
    }
  }

  async componentDidMount() {
    try {
      const popularPlaces = await this.state.searchService.getSearchStar();
     
      this.setState({places: popularPlaces});
    } catch (error) {
      console.log("Handle loading popular places error: ", error);
    }
  }

  render() {
      return (
          <div className="main-popular-places">
            <div className="main-popular-places-container">
              <div className="main-popular-places-title">Popular places:</div>
              {
                this.state.places ? <PlacesGrig places={this.state.places} /> : <Spinner />
              }
            </div>
          </div>
      );
  }
}