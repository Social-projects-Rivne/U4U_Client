
import './weather.scss';
import React from 'react';
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import WeatherService from "../../../../services/weather-service";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: props.latitude,
            longitude: props.longitude
        };
        this.weather = WeatherService;
    }

    componentWillMount() {
        const options = {
            latitude: this.state.latitude,
            longitude: this.state.longitude
        };
        this.weather.getCurrent(options).then((res) => {
            this.setState({
                weatherIcon: res.currently.icon,
                temperature: res.currently.temperature
            });
        }).catch(console.error);
    }

    render() {
        const { weatherIcon, temperature } = this.state;
        return (
            <div className="weather-info">
                <WeatherIcon iconId={weatherIcon} />
                <Temperature value={temperature} size="4x" />
            </div>
        )
    }
}

export default Weather;
