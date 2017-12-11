import React, { Component } from 'react';
import { string } from 'prop-types';
import axios from 'axios';

export default class Flag extends Component {
    state = {
        url:''
};

   getUrl() {
       axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.country}`)
           .then(resp => this.setState({url: resp.data.flag}))
   }


  render() {
      console.log(this.getUrl());
    return <img className="flag" src={this.state.url} alt = {`flag of the ${this.props.country}`} />;
  }
}

Flag.propTypes = {
  country: string.isRequired
};
