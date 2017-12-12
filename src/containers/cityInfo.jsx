import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCity } from '../actions/index';
import Chart from '../components/chart';
import Flag from '../containers/flag';
import { codes } from '../CountryCodes.json';
import '../styles/cityInfo.scss';

class CityInfo extends Component {
  state = {
    mouseOn: false
  };

  getAverageTemp = () => this.props.data.reduce((sum, cur) => sum + cur.temp, 0) / this.props.data.length;

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
        title="close"
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
        className="cityInfo"
        onMouseEnter={() => this.setState({ mouseOn: true })}
        onMouseLeave={() => this.setState({ mouseOn: false })}
      >
        <td>
          <div className="name">
            <span className="cityName">{this.props.item.city.name}</span>
            <br />
            <span className="countryName">{this.searchCountry()}</span>
            <br />
            <Flag country={this.props.item.city.country} />
          </div>
        </td>
        <td>
            <div className="briefInfo">
                <img src={`http://openweathermap.org/img/w/${this.props.item.list[0].weather[0].icon}.png`} alt="icon" />
                <br />
                <span className="averageTemp">{`${Math.round(this.getAverageTemp())}${String.fromCharCode(176)}C`}</span>
            </div>
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
