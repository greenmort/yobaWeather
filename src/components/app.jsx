import React, { Component } from 'react';
import SearchBar from '../containers/searchBar'
import '../styles/main.scss';

export default class App extends Component {

  render() {
    return (
      <div className="main">
        <SearchBar/>
      </div>
    );
  }
}