
import './weather.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

const Temperature = (props) => {
    const tempIcon = (
        props.value > 20
            ? faTemperatureHigh
            : faTemperatureLow
    );
    return (
        <div className='weather-temp'>
            <div id="weather-temp-icon">
                <FontAwesomeIcon icon={tempIcon} size="4x" />
            </div>
            <div id="weather-temp-value">{props.value}°C</div>
        </div>
    )
};

export default Temperature
