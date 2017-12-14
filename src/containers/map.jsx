import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {closeMap} from '../actions/index';
import '../styles/map.scss';

const API_KEY = 'AIzaSyClYNlrajPq73euXfGKja4Y6zZak6btmyQ';

const GMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { lat, lng } = props.coord;
  return (
    <GoogleMap zoom={props.zoom} center={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
});

class Map extends Component {

  render() {
    if (this.props.map.isSelected)
      return (
          <div className="googleMap">
              <GMap isMarkerShown coord={this.props.map.coord} zoom={this.props.map.zoom} />
              <i
                  className="fa fa-times-circle closeIcon"
                  aria-hidden="true"
                  role="button"
                  tabIndex={0}
                  onClick={()=>this.props.closeMap()}
              />
          </div>
      );
    return null;
  }
}

function mapStateToProps({ map }) {
  return { map };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({closeMap}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
