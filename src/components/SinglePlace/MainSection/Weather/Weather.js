import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import './Weather.scss';

const Weather = () => {
   return (
      <div className='weather-icon'>
         < FontAwesomeIcon icon={faTemperatureLow} size="4x" />
      </div>
   )
}
export default Weather;


      

   