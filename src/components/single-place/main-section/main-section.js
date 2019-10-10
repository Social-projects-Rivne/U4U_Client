import React from 'react';
import AddToWishListBttn from './add-to-wish-list-bttn/add-to-wish-list-bttn';
import PlaceDescription from './place-description/place-description';
import GeneralCommentsNumber from './general-comments-number/general-comments-number';
import GeneralRating from './general-rating/general-rating';
import PlaceName from './place-name/place-name';
import PlacePhotos from './place-photos/place-photos';
import SubHeading from './sub-heading/sub-heading';
import Weather from './weather/weather'
import RegionsService from '../../../services/regions-service';
import './main-section.scss';


export default class MainSection extends React.Component {
  constructor(prop) {
    super(prop);
    this.service = new RegionsService();
    this.state = {
      place: null
    };
  }

  componentDidMount() {
    this.getPlace();
  }

  getPlace = () => {
    this.service.getPlaces()
      .then((place) => {
        console.log(place[2])
        this.setState({ place: place[2] })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    if (this.state.place === null) {
      return <h1>Not found</h1>
    }
    const { name, photos, description } = this.state.place;
    console.log(this.state.place);

    return (

      <div className='main-section'>
        <div className='placename-weather'>
          <PlaceName placeName={name} />
          <Weather />
        </div>
          <SubHeading />
          <PlacePhotos photos={photos} />
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






