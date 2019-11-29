import React from 'react';
import AddToWishListBttn from './add-to-wish-list-bttn/add-to-wish-list-bttn';
import PlaceDescription from './place-description/place-description';
import GeneralCommentsNumber from './general-comments-number/general-comments-number';
import GeneralRating from './general-rating/general-rating';
import PlacePhotos from './place-photos/place-photos';
import './main-section.scss';


export default class MainSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: props.place
    };
  }

  render() {
    if (this.state.place === null) {
      return <h1>Not found</h1>
    }

    const { photos, description } = this.state.place;

    return (

      <div className='main-section global-white-layout'>
        <PlacePhotos place={this.state.place} photos={photos} />
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






