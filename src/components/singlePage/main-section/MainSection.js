import React from 'react';
import AddToWishListBttn from '../main-section/AddToWishListBttn/AddToWishListBttn';
import Article from '../main-section/Article/Article';
import GeneralCommentsNumber from '../main-section/GeneralCommentsNumber/GeneralCommentsNumber';
import GeneralRating from '../main-section/GeneralRating/GeneralRating';
import PlaceName from '../main-section/PlaceName/PlaceName';
import PlacePhotos from '../main-section/PlacePhotos/PlacePhotos';
import SubHeading from '../main-section/SubHeading/SubHeading';
import Weather from '../main-section/Weather/Weather';
import CommentSection from '../comment-section/CommentSection';
import './MainSection.scss';

const MainSection = () => {
  return (

    <div className='MainSection'>
      <div className='HeadingWeather'>
        < PlaceName placeName='Rivne' />
        < Weather />
      </div>
      < SubHeading />
      < AddToWishListBttn />
      <div className="Photos">
        < PlacePhotos />
      </div>
      <div className='UserActivityInfo'>
        < GeneralCommentsNumber />
        < GeneralRating />
      </div>
      < Article />
      < CommentSection />
    </div>

  )
}

export default MainSection;