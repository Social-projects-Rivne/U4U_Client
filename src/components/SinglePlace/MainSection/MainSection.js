import React from 'react';
import AddToWishListBttn from './AddToWishListBttn/AddToWishListBttn'
import PlaceDescription from './PlaceDescription/PlaceDescription';
import GeneralCommentsNumber from './GeneralCommentsNumber/GeneralCommentsNumber';
import GeneralRating from './GeneralRating/GeneralRating';
import PlaceName from './PlaceName/PlaceName';
import PlacePhotos from './PlacePhotos/PlacePhotos';
import SubHeading from './SubHeading/SubHeading';
import Weather from './Weather/Weather'
import RegionsService from '../../../services/RegionsService';
import './MainSection.scss';


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






