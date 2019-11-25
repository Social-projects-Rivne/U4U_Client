import React from 'react';
import AddToWishListBttn from './add-to-wish-list-bttn/add-to-wish-list-bttn';
import PlaceDescription from './place-description/place-description';
import GeneralCommentsNumber from './general-comments-number/general-comments-number';
import GeneralRating from './general-rating/general-rating';
import PlaceName from './place-name/place-name';
import PlacePhotos from './place-photos/place-photos';
import SubHeading from './sub-heading/sub-heading';
import Weather from './weather/weather'
import './main-section.scss';


export default class MainSection extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     place: props.place
  //   };
  // }

  state = {
    place: this.props.place
  }

  render() {
    if (this.state.place === null) {
      return <h1>Not found</h1>
    }

    const { name, photos, description, ratingAvg } = this.state.place;

    return (
      <div className='main-section'>
        <div className='placename-weather'>
          <PlaceName placeName={name} />
          {
            this.state.place.coordinates
              ?
              <Weather
                latitude={this.state.place.coordinates.latitude}
                longitude={this.state.place.coordinates.longitude} //TODO: change this workaround when all places will have coodinates
              />
              : null
          }
        </div>
        <SubHeading />
        <PlacePhotos photos={photos} />
        <div className='user-activity-info'>
          <GeneralCommentsNumber commentQuantity={this.props.commentQuantity} />
          <GeneralRating ratingAvg={ratingAvg} />
          <AddToWishListBttn />
        </div>
        <PlaceDescription placeInfo={description} />
      </div>
    )
  }
}
