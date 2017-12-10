import React, {Component} from 'react';
import {connect} from 'react-redux';
import CityInfo from './cityInfo';

class WeatherList extends Component{
    renderWeather(){
        return this.props.weather.map(item => {
            const data = [];
            item.list.forEach((elem) => {data.push({
                temp: elem.main.temp,
                pressure: elem.main.pressure,
                humidity: elem.main.humidity,
                date: new Date(elem.dt_txt).toDateString()
            })});
            console.log(data);
            return(
                <CityInfo key={item.city.id} id={item.city.id} item={item} data={data}/>
            )
        })
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Brief</th>
                        <th>Weather info</th>
                    </tr>
                </thead>
                <tbody>
                        {this.renderWeather()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return{weather}
}

export default connect(mapStateToProps)(WeatherList);