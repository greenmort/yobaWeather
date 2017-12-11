import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCity } from '../actions/index';
import Chart from '../components/chart';
import Flag from '../components/flag';
import { codes } from '../CountryCodes.json';
import '../styles/cityInfo.scss';

class CityInfo extends Component {
  state = {
    mouseOn: false
  };

  searchCountry() {
    let name = '';
    codes.forEach(item => {
      if (item.code === this.props.item.city.country) ({ name } = item);
    });
    return name;
  }

  deleteItem = e => {
    this.props.deleteCity(+e.target.id);
  };

  TrashIcon = id => (
    <div role="button" tabIndex={0}>
      <i
        id={id}
        className="fa fa-minus-circle icon"
        role="button"
        tabIndex={0}
        onClick={this.deleteItem}
        onKeyPress={e => e.target === 13 && this.deleteItem()}
      />
    </div>
  );

  render() {
    return (
      <tr
        key={this.props.item.city.id}
        onMouseEnter={() => this.setState({ mouseOn: true })}
        onMouseLeave={() => this.setState({ mouseOn: false })}
      >
        <td>
          {this.props.item.city.name}
          <br />
          {this.searchCountry()}
          <br/>
          <Flag country={this.props.item.city.country} />
        </td>
        <td>
          <img src={`http://openweathermap.org/img/w/${this.props.item.list[0].weather[0].icon}.png`} alt="icon" />
        </td>
        <td>
          <Chart data={this.props.data} dataKey="temp" color="#FF0000" />
        </td>
        {/* <td>
                    <Chart data={this.props.data} dataKey="pressure" color="#00FF00"/>
                </td>
                <td>
                    <Chart data={this.props.data} dataKey="humidity" color="#0000FF"/>
                </td> */}
        <td>{this.state.mouseOn ? this.TrashIcon(this.props.item.city.id) : <div />}</td>
      </tr>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(CityInfo);
