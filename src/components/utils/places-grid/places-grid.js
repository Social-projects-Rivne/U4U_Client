import React, { Component } from 'react';
import Api from './../../../services/places-service';
import PlaceCard from './../../utils/place-card/place-card';
import './places-grid.scss';


export default class PlacesGrid extends Component {
  constructor (props) {
    super (props);

    this.state = {
      places: props.places
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
        <div className="PlacesGrid">
        {
            this.state.places &&
              this.state.places.map(place => {
                  return (
                  <PlaceCard 
                      key={place._id}
                      id={place._id}
                      photo={place.photos[0]} //TODO: resolve, now hardcoded first one
                      title={place.name} 
                  />
                  )
              })
        }
        </div>
    );
  }
}