import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import TextField from '@mui/material/TextField';
import "./map.css"

class MapWithSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      markers: [],
      selectedPlace: {},
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ query: event.target.value });
    // Here you can perform a search based on the query and update the markers accordingly
    // For simplicity, we're not implementing the search functionality in this example
  }

  render() {
    const mapStyles = {
      width: '90%',
      height: '400px',
    };

    return (
      <div className="search-bar">
        <div>
          <TextField
            value={this.state.query}
            onChange={this.handleSearch}
            placeholder="Search..."
            variant="outlined" // or "filled" for a filled input
            fullWidth // to make the input take up full width
          />
        </div>
        <div className='spacer'/>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 37.774929, lng: -122.419416 }} // Default to San Francisco coordinates
        >
          {/* Here you can map over this.state.markers and render Marker components */}
          {/* For simplicity, we're not adding markers in this example */}
          <Marker position={{ lat: 37.774929, lng: -122.419416 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapWithSearch);
