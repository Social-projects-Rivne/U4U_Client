import React, { Component } from 'react';
import Api from './../../../services/api.service'
import FIlter from './filter/filter';
import PlaceCard from './../../utils/place-card'
import RegionsNames from "./../../../global-data/regions-names";
import './places-list.scss';

export default class PlacesList extends Component {
  state = {
    places: null
  };

  async componentDidMount() {
    try {
      const places = await Api.getAllPlaces();
      console.log(places)
      this.setState({places: places});
    } catch (error) {
      console.log("Handle loading all places error: ", error)
    }
  }

  render() {
    return (
      <div className='places-list'>
        <div className='places-list-header'>
            <h1 className='places-list-header-title'>Main Ukraine places</h1>
            <div className='places-list-header-filtres'>
            <FIlter name='regions' data={RegionsNames}/>
            {/* <FIlter name='region'/>
            <FIlter name='place'/>
            <FIlter name='rating'/> */}
            </div>
        </div>
        <div className='places-list-content'>
        {/* {
          this.state.places &&
            this.state.places.map(place => {
              //console.log(place)
              return (
                   <PlaceCard 
                      key={place._id} 
                      photo={place.photos[0]} 
                      title={place.name} 
                      />
              )
            })
				} */}
        </div>
        <div className='places-list-pagination'>
        c
        </div>
      </div>
    );
  }
}
