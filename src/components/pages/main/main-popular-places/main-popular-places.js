import React, { Component } from 'react';
import PlacesGrig from './../../../utils/places-grid';
import Api from './../../../../services/places-service';
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
      const places = await Api.getAllPlaces();
      this.setState({places: places});
    } catch (error) {
      console.log("Handle loading all places error: ", error);
    }
  }

  render() {
      return (
          <div className="main-popular-places">
            <PlacesGrig places={this.state.places} />
          </div>
      );
  }
}