import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./map.css"

class MapWithSearch extends Component {
  render() {
    const mapContainerStyle = {
      width: '100%', // Set the width to 90%
      height: '400px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const mapStyles = {
      width: '100%', // Set map width to 100% within its container
      height: '100%', // Set map height to 100% within its container
    };

    return (
      <div className="search-bar" style={mapContainerStyle}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 37.774929, lng: -122.419416 }} // Default to San Francisco coordinates
        >
          <Marker position={{ lat: 37.774929, lng: -122.419416 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapWithSearch);
