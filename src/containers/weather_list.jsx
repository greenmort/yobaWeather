import React, {Component} from 'react';
import {connect} from 'react-redux';
import CityInfo from './cityInfo';

class WeatherList extends Component{
    renderWeather(){
        return this.props.weather.map(item => {
            const temps = item.list.map(note => note.main.temp);
            const press = item.list.map(note => note.main.pressure);
            const humids = item.list.map(note => note.main.humidity);
            console.log(item.list[0]);
            return(
               <CityInfo key={item.city.id} id={item.city.id} item={item} temps={temps} press={press} humids={humids}/>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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