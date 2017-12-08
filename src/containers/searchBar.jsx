import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

export default class SearchBar extends Component{
    state = {
        term:''
    };

    onInputChange = e => {
        this.setState({
            term: e.target.value
        });
    };

    onSubmitForm = e => {
        e.preventDefault()

    };

    render(){
        return(
            <form className="input-group" onSubmit={this.onSubmitForm}>
                <input
                    type="text"
                    onChange={this.onInputChange}
                    value={this.state.term}
                    className="form-control"
                    placeholder="give five day forecast"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}