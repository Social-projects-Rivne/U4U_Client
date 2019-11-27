import React, { Component } from 'react';
import PlaceCard from './../../utils/place-card/place-card';
import './places-grid.scss';


export default class PlacesGrid extends Component {
  constructor (props) {
    super (props);

    if (!props.places) {
      throw Error("This component cant exist without next props:\n places\n")
    }

    this.state = {
      places: props.places
    }
  }

  render() {
      return (
        <div className="PlacesGrid">
        {
          this.state.places &&
            this.state.places.map(place => {
                return (
                  place._id && place.photos.length && place.name
                  ? <PlaceCard 
                        key={place._id}
                        id={place._id}
                        photo={place.photos[0]} //TODO: resolve, now hardcoded first one
                        title={place.name} 
                    />
                  : ""
                )
            })
        }
        </div>
    );
  }
}