import axios from 'axios';

const API_KEY = 'e3d9aa32e2860563d568584744d24fd9';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';
export const HANDLE_XHR_ERROR = 'HANDLE_XHR_ERROR';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${API_KEY}`;

function onGetData(response) {
  return {
    type: FETCH_WEATHER,
    payload: response
  };
}

function onGetError(err) {
  return {
    type: HANDLE_XHR_ERROR,
    payload: err
  };
}

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch(onGetData(response));
      })
      .catch(err => {
        dispatch(onGetError(err));
      });
  };
}

export function deleteCity(cityID) {
  return {
    type: DELETE_CITY,
    payload: cityID
  };
}
