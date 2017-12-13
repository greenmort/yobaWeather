import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import '../styles/map.scss';

const API_KEY = 'AIzaSyClYNlrajPq73euXfGKja4Y6zZak6btmyQ';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
    console.log(props.map.coord);
  const { lat } = props.map.coord;
  const { lng } = props.map.coord;
  if (props.map.isSelect)
    return (
      <GoogleMap zoom={12} center={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    );
  return null;
});

function mapStateToProps({ map }) {
  return { map };
}

export default connect(mapStateToProps)(Map);
