import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCity} from '../actions/index';
import Chart from '../components/chart';
import '../styles/cityInfo.scss';

class CityInfo extends Component{
    state = {
        mouseOn: false
    };

    TrashIcon = () => (
        <div role="button" tabIndex={0} >
            <i className="fa fa-minus-circle icon"/>
        </div>
    );

    deleteItem = e => {
        this.props.deleteCity(this.props.id);
    };

    render(){
        return(
            <tr key = {this.props.item.city.id}
                onMouseEnter={() => this.setState({mouseOn:true})}
                onMouseLeave={() => this.setState({mouseOn:false})}
                onClick={this.deleteItem}>
                <td>{this.props.item.city.name}</td>
                <td>
                    <img src={`http://openweathermap.org/img/w/${this.props.item.list[0].weather[0].icon}.png`} alt = 'icon' />
                </td>
                <td>
                    <Chart data={this.props.temps} color="red"/>
                </td>
                <td>
                    <Chart data={this.props.press} color="blue"/>
                </td>
                <td>
                    <Chart data={this.props.humids} color="green"/>
                </td>
                <td>{(this.state.mouseOn) ? this.TrashIcon() : <div/>}</td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteCity}, dispatch)
}

export default connect (null, mapDispatchToProps)(CityInfo)