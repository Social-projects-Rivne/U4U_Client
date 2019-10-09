import React from 'react';
import './PlacePhotos.scss'

const PlacePhotos = ({photos}) =>{
    console.log(photos);
      return  (
          <div className ='place-photo'>
            <img src = {photos[1]}
            alt = ''/>
            </div>
        )
    }

export default PlacePhotos;

