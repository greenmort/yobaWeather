import React, {Component} from 'react';
import {compose, withProps} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import '../styles/map.scss';

const API_KEY='AIzaSyClYNlrajPq73euXfGKja4Y6zZak6btmyQ';

const Map = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`,
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div style={{ height: '400px' }} />,
        mapElement: <div style={{ height: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    const {lat} = props;
    const {lng} = props;
    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: props.lat, lng: props.lng }}
        >
            <Marker position={{ lat, lng}} />
        </GoogleMap>
    )});


export default Map;