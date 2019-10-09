import React from 'react';
import './Weather.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'


const Weather = () => {
   const weatherIcon = < FontAwesomeIcon icon={faTemperatureLow} size="2x" />

   return (

      <div className='WeatherIcon'>
         {weatherIcon}
      </div>
   )
}
export default Weather;