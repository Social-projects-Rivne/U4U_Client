import React, { Component } from 'react';
import PlacesGrig from './../../../utils/places-grid';
import PlacesApi from './../../../../services/places-service';
import Spinner from './../../../utils/spinner';
import './main-popular-places.scss';


export default class MainPopularPlaces extends Component {
  constructor (props) {
    super (props);

    this.state = {
      places: null
    }
  }

  async componentDidMount() {
    try {
      const places = await PlacesApi.getAllPlaces();
      this.setState({places: places});
    } catch (error) {
      console.log("Handle loading all places error: ", error);
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