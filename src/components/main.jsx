import React, { Component } from 'react';
import SearchBar from '../containers/searchBar'
import '../styles/main.scss';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <SearchBar/>
      </div>
    );
  }
}

export default Main;
