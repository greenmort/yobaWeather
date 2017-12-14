import axios from 'axios';

const API_KEY = 'e3d9aa32e2860563d568584744d24fd9';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';
export const DELETE_CITY = 'DELETE_CITY';
export const OPEN_MAP = 'OPEN_MAP';
export const CLOSE_MAP = 'CLOSE_MAP';

function onGetData(response) {
  return {
    type: FETCH_WEATHER,
    payload: response
  };
}

function onGetError(err) {
  return {
    type: SHOW_ALERT,
    payload: err
  };
}

export function fetchWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`;
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

export function onCloseDialog() {
  return {
    type: HIDE_ALERT
  };
}

export function deleteCity(cityID) {
  return {
    type: DELETE_CITY,
    payload: cityID
  };
}

export function openMap(coord) {
  return {
    type: OPEN_MAP,
    payload: coord
  };
}

export function closeMap(){
  return{
    type: CLOSE_MAP
  };
}
