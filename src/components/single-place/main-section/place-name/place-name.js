import React from 'react';
import './place-name.scss';

const PlaceName = ({placeName}) =>{
       return  (
            <h1 className ='place-name'>{placeName}</h1>
        )
    }
export default PlaceName;