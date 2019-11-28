import React, { Component } from 'react';
import FIlter from './filter/filter';
import PlacesGrid from './../../utils/places-grid/';
import ButtonLoadingMore from './../../utils/button-loading-more';
import PlacesApi from './../../../services/places-service';
import RegionsNames from './../../../global-data/regions-names';
import Spiner from './../../utils/spinner';
import './places-list.scss';
import Spinner from './../../utils/spinner';

export default class PlacesList extends Component {
  state = {
    fIlteRatingData: [
      {
        id: 1,
        title: "Top places"
      },
      {
        id: 2,
        title: "Best reviews"
      },
      {
        id: 3,
        title: "Count reviews"
      }
    ],
    places: null,
    title: "All Ukrainian places",
    ratingFilterValue: null,
    regionsFIlterValue: null
  };

  async componentDidMount() {
    const {regionId} = this.props.match.params;
    
    try {
      if(regionId) {
        const places = await PlacesApi.getRegionPlaces(regionId);
        const filteredPlaces = places.filter((place) => {
          return place.isModerated === true &&  place.approved === true
        })
        this.setState({places: filteredPlaces});
      } else {
        const places = await PlacesApi.getAllPlaces();
        const filteredPlaces = places.filter((place) => {
          return place.isModerated === true &&  place.approved === true
        })
        this.setState({places: filteredPlaces});
      }
    } catch (error) {
      console.log("Handle loading all places error: ", error);
    }
  }

  getFilterValue = (data) => {
    if (data) {
      if (data.from === "rating") {
        this.setState({ ratingFilterValue: data.value })
      } else if (data.from === "regions") {
        this.setState({ regionsFIlterValue: data.value })
      }
    }
  }

  render() {
    const changeHeight = {
      height: (this.state.places) ? 'auto' : '100%'
    };
      
    return (
      <div className='places-list' style={changeHeight}>

        <div className='places-list-container'>
          <div className='places-list-container-header'>
            <div className='places-list-container-header-title'>
              <div className='places-list-container-header-title-wp'>
                {
                  this.state.ratingFilterValue
                    ? <div className='places-list-container-header-title-wp-item'>
                      Rating: {this.state.ratingFilterValue}
                    </div>
                    : null
                }
                {
                  this.state.regionsFIlterValue
                    ? <div className='places-list-container-header-title-wp-item'>
                      Region: {this.state.regionsFIlterValue}
                    </div>
                    : null
                }
                {
                  !this.state.ratingFilterValue && !this.state.regionsFIlterValue
                    ? <div className='places-list-container-header-title-wp-item'>
                      {this.state.title}
                    </div>
                    : null
                }
              </div>
            </div>
            <div className='places-list-container-header-filtres'>
              <FIlter
                name='rating'
                data={this.state.fIlteRatingData}
                getFilterValue={this.getFilterValue}
              />
              <FIlter
                name='regions'
                data={RegionsNames}
                getFilterValue={this.getFilterValue}
              />
            </div>
          </div>

          {
            this.state.places ?  <PlacesGrid places={this.state.places} /> : <Spinner />
          }

          <div className='places-list-container-load-more'>
            <ButtonLoadingMore />
          </div>
        </div>
      </div>
    );
  }
}
