import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import Errors from '../components/errorWindow';
import WeatherList from '../containers/weather_list';
import '../styles/main.scss';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <SearchBar />
        <Errors />
        <WeatherList />
      </div>
    );
  }
}
