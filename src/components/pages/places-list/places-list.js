import React, { Component } from 'react';
import Api from '../../../services/places.service';
import FIlter from './filter/filter';
import PlaceCard from './../../utils/place-card';
import ButtonLoadingMore from './../../utils/button-loading-more';
import RegionsNames from  './../../../global-data/regions-names';
import Spiner from './../../utils/spinner';
import './places-list.scss';

export default class PlacesList extends Component {
  state = {
    places: null,
    fIlteRatingData: [
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
    ]
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
    const changeHeight = {
      height: (this.state.places) ? 'auto' : '100%'
    };

    const spinerModifier = (this.state.places) ? '' : ' places-list-spinner-show'
    const contentModifier = (this.state.places) ? ' places-list-container-show' : ''
      
    return (
      <div className='places-list' style={changeHeight}>
        <div className={`places-list-spiner ${spinerModifier}`}>
          <Spiner />
        </div>

        <div className={`places-list-container ${contentModifier}`}>
          <div className='places-list-container-header'>
              <h1 className='places-list-container-header-title'>Top Ukraine places:</h1>
              <div className='places-list-container-header-filtres'>
                <FIlter 
                  name='rating' 
                  data={this.fIlteRatingData}
                />
                <FIlter 
                  name='regions' 
                  data={RegionsNames}
                />
              </div>
          </div>

          <div className='places-list-container-content'>
          {
            this.state.places &&
              this.state.places.map(place => {
                return (
                  <PlaceCard 
                    key={place._id} 
                    photo={place.photos[0]} //TODO: resolve, now hardcoded first one
                    title={place.name} 
                  />
                )
              })
          }
          </div>

          <div className='places-list-container-load-more'>
            <ButtonLoadingMore/>
          </div>
        </div>
      </div>
    );
  }
}
