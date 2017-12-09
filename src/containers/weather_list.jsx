import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
    renderWeather(){
        return this.props.weather.map(item => {
            const temps = item.list.map(note => note.main.temp);
            const press = item.list.map(note => note.main.pressure);
            const humids = item.list.map(note => note.main.humidity);
            return(
                <tr key={item.city.id}>
                    <td>{item.city.name}</td>
                    <td>
                        <Chart data={temps} color="red"/>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
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