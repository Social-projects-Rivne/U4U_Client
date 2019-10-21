
import './weather.scss';
import React from 'react';
import {
    WiDaySunny, WiNightClear,
    WiCloudy, WiNightPartlyCloudy,
    WiRain, WiSnow, WiWindy, WiFog, WiSleet
} from "weather-icons-react";

const icons = {
    byId: new Map([
        ["clear-day", WiDaySunny],
        ["clear-night", WiNightClear],
        ["rain", WiRain],
        ["snow", WiSnow],
        ["sleet", WiSleet],
        ["wind", WiWindy],
        ["fog", WiFog],
        ["cloudy", WiCloudy],
        ["partly-cloudy-day", WiCloudy],
        ["partly-cloudy-night", WiNightPartlyCloudy],
    ]),
    default: "clear-day"
};

const WeatherIcon = (props) => {
    const Icon = icons.byId.get(
        icons.byId.has(props.iconId)
            ? props.iconId
            : icons.default
    );
    return (
        <div className="weather-icon">
            <Icon size={70} color="#FFFF" />
        </div>
    )
};

export default WeatherIcon;
