
import request from "./request";
import { stringify } from "querystring";

class WeatherService {
    baseUrl = `${request._baseUrl}/weather`;

    getCurrent(options) {
        const url = `${this.baseUrl}/current?${stringify(options)}`;
        return fetch(url).then((res) => res.json());
    }
}

export default new WeatherService();
