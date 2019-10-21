
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
            longitude: props.longitude,
            hideElements: true
        };
        this.weather = WeatherService;
    }

    componentWillMount() {
        const options = {
            latitude: this.state.latitude,
            longitude: this.state.longitude
        };
        this.weather.getCurrent(options).then((res) => {
            if (res.ok) {
                this.setState({
                    weatherIcon: res.currently.icon,
                    temperature: res.currently.temperature,
                    hideElements: false
                });
            } else {
                throw res
            }
        }).catch((err) => {
            console.error(err);
            this.setState({
                hideElements: true
            });
        });
    }

    render() {
        const { weatherIcon, temperature } = this.state;
        const style = (
            this.state.hideElements
            ? { visibility: "hidden" }
            : {}
        );
        return (
            <div className="weather-info" style={style}>
                <WeatherIcon iconId={weatherIcon} />
                <Temperature value={temperature} size="4x" />
            </div>
        )
    }
}

export default Weather;
