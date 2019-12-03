
import './weather.scss';
import React from 'react';
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import WeatherService from "../../../../services/weather-service";
import { withRouter } from 'react-router-dom';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 0,
            longitude: 0,
            hideElements: true
        };
        this.weather = WeatherService;
    }

    componentDidUpdate() {
        if (this.props.latitude !== this.state.latitude
            && this.props.longitude !== this.state.longitude) {
            this.getWeatherData();
        }
    }

    componentDidMount() {
        this.getWeatherData();
    }

    getWeatherData() {
        if (this.props.latitude && this.props.longitude) {
            const options = {
                latitude: this.props.latitude,
                longitude: this.props.longitude
            };
            this.weather.getCurrent(options).then((res) => {
                if (res.ok) {
                    this.setState({
                        latitude: this.props.latitude,
                        longitude: this.props.longitude,
                        weatherIcon: res.currently.icon,
                        temperature: Math.round(res.currently.temperature),
                        hideElements: false
                    });
                } else {
                    throw res;
                }
            }).catch((err) => {
                this.setState({
                    hideElements: true
                });
            });
        }
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

export default withRouter(Weather);
