import React from 'react';
import AddToWishListBttn from './add-to-wish-list-bttn/add-to-wish-list-bttn';
import PlaceDescription from './place-description/place-description';
import GeneralCommentsNumber from './general-comments-number/general-comments-number';
import GeneralRating from './general-rating/general-rating';
import PlacePhotos from './place-photos/place-photos';
import PlaceName from './place-name';
import Weather from './weather';
import SubHeading from './sub-heading';
import './main-section.scss';


export default class MainSection extends React.Component {
  render() {
    if (this.props.place === null) {
      return <h1>Not found</h1>
    }

    const { photos, description, location, name, coordinates } = this.props.place;

    return (

      <div className='main-section global-white-layout'>
        <div className='main-section-header'>
            <div className="main-section-header-place-info">
                <div className="main-section-header-place-info-header">
                    <div className="main-section-header-place-info-header-title">
                        <PlaceName placeName={name} />
                        <div>{location.region.trim()}, {location.district.trim()}</div>
                    </div>
                    <div>
                        {coordinates
                            ?
                                <Weather 
                                    latitude={coordinates.latitude} 
                                    longitude={coordinates.longitude} /> //TODO: change this workaround when all places will have coodinates
                            : null
                        }
                    </div>
                </div>
                <div className="main-section-header-place-info-subhead">
                    <SubHeading />
                </div>
            </div>
          <PlacePhotos place={this.props.place} photos={photos} />
        </div>
        <div className='user-activity-info'>
          <GeneralCommentsNumber />
          <GeneralRating />
          <AddToWishListBttn />
        </div>
          <PlaceDescription placeInfo={description} />
      </div>
    )
  }
}






