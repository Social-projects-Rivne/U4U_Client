import React, { Component } from 'react';
import PlaceCard from './../../utils/place-card/place-card';
import './places-grid.scss';


export default class PlacesGrid extends Component {
  constructor (props) {
    super (props);

    if (!props.places) {
      throw Error("This component cant exist without next props:\n places\n")
    }
  }

  render() {
    const {places} = this.props
      return (
        <div className="PlacesGrid">
        {
          places &&
            places.map(place => {
                return (
                  place._id && place.photos.length && place.name
                  ? <PlaceCard 
                        key={place._id}
                        place={place}
                    />
                  : ""
                )
            })
        }
        </div>
    );
  }
}