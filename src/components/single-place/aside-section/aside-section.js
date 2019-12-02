import React, { Component } from 'react';
import PlaceCard from './../../utils/place-card';
import PlacesApi from './../../../services/places-service';
import './aside-section.scss';

export default class AsideSection extends Component {
    constructor (props) {
        super (props);

        this.state = {
            places: null
        }
    }

    async componentDidMount() {
        try {
            const places = await PlacesApi.getAllPlaces();
            const filteredPlaces = places.filter((place) => {
                return place.isModerated === true &&  place.approved === true
            });
              
            let placesNear = filteredPlaces
            if (placesNear.length > 4) {
                placesNear = placesNear.slice(0, 4);
            }
            
            this.setState({places: placesNear});
        } catch (error) {
            console.log("Handle loading all places error: ", error);
        }
    }

    render() {
        return (
            <div className='aside-section'>
                <span>Places Nearby</span>
                {
                    this.state.places &&
                        this.state.places.map(place => {
                            return (
                                <PlaceCard 
                                    key={place._id}
                                    place={place}
                                />
                            )
                        })
                }
            </div>
        )
    }
}

