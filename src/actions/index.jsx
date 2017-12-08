import axios from 'axios';

const API_KEY = 'e3d9aa32e2860563d568584744d24fd9';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}