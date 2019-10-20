import React, { Component } from 'react';
import Api from './../../../services/api.service';
import FIlter from './filter/filter';
import PlaceCard from './../../utils/place-card';
import ButtonLoadingMore from './../../utils/button-loading-more';
import RegionsNames from "./../../../global-data/regions-names";
import './places-list.scss';

export default class PlacesList extends Component {
  state = {
    places: null
  };

  async componentDidMount() {
    try {
      const places = await Api.getAllPlaces();
      this.setState({places: places});
    } catch (error) {
      console.log("Handle loading all places error: ", error);
    }
  }

  render() {
    const sortRetingData = [
      { 
        id: 1,
        title: "Top places" 
      },
      { 
        id: 2,
        title: "Top region" 
      },
      { 
        id: 3,
        title: "Best reviews" 
      },
      { 
        id: 4,
        title: "Count reviews" 
      }
    ];

    return (
      <div className='places-list'>
        <div className='places-list-header'>
            <h1 className='places-list-header-title'>Top Ukraine places:</h1>
            <div className='places-list-header-filtres'>
              <FIlter 
                name='rating' 
                data={sortRetingData}
              />
              <FIlter 
                name='regions' 
                data={RegionsNames}
              />
            </div>
        </div>
        <div className='places-list-content'>
        {
          this.state.places &&
            this.state.places.map(place => {
              return (
                <PlaceCard 
                  key={place._id} 
                  photo={place.photos[0]} 
                  title={place.name} 
                />
              )
            })
				}
        </div>
        <div className='places-list-pagination'>
          <ButtonLoadingMore/>
        </div>
      </div>
    );
  }
}
