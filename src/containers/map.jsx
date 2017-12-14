import React, { PureComponent } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
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
  const { lat } = props.coord;
  const { lng } = props.coord;
  return (
    <GoogleMap zoom={props.zoom} center={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
});

class Map extends PureComponent {

  render() {
    if (this.props.map.isSelected)
      return (
          <div className="googleMap">
              <GMap isMarkerShown coord={this.props.map.coord} zoom={this.props.map.zoom} />
          </div>
      );
    return null;
  }
}

function mapStateToProps({ map }) {
  return { map };
}

export default connect(mapStateToProps)(Map);
