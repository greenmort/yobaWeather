import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import Errors from '../containers/errorWindow';
import WeatherList from '../containers/weather_list';
import '../styles/main.scss';
import Map from '../containers/map';

export default class App extends Component {
  render() {
    return (
      <div id="application" className="main">
        <SearchBar />
        <WeatherList />
        <Errors />
        <Map />
      </div>
    );
  }
}
