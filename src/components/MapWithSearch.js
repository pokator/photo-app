// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import "./map.css";

// class MapWithSearch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userLocation: null,
//       mapCenter: { lat: 37.774929, lng: -122.419416 }, // Default to San Francisco coordinates
//       showUserLocation: true, // Enable user location
//       mapLoaded: false // Flag to indicate whether the map has loaded
//     };
//   }

//   componentDidMount() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           this.setState({
//             userLocation,
//             mapCenter: userLocation, // Set mapCenter to user's location once available
//             mapLoaded: true // Mark the map as loaded
//           });
//         },
//         (error) => {
//           console.error('Error getting user location:', error);
//           this.setState({ mapLoaded: true }); // Mark the map as loaded even if there's an error
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//       this.setState({ mapLoaded: true }); // Mark the map as loaded if geolocation is not supported
//     }
//   }

//   render() {
//     const { mapLoaded, mapCenter } = this.state;

//     const mapContainerStyle = {
//       width: '100%', // Set the width to 100%
//       height: '400px',
//       position: 'relative',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     };

//     const mapStyles = {
//       width: '100%', // Set map width to 100% within its container
//       height: '100%', // Set map height to 100% within its container
//     };

//     return (
//       <div className="search-bar" style={mapContainerStyle}>
//         {!mapLoaded && <div>Loading...</div>}
//         {mapLoaded && 
//         <Map
//           google={this.props.google}
//           zoom={14}
//           style={mapStyles}
//           initialCenter={mapCenter} // Set initialCenter to mapCenter state value
//           streetViewControl={false}
//           showUserLocation={true}
//         >

//         </Map>
//         }
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
// })(MapWithSearch);

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./map.css";

class MapWithSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: null,
      mapCenter: { lat: 37.774929, lng: -122.419416 }, // Default to San Francisco coordinates
      showUserLocation: true, // Enable user location
      mapLoaded: false // Flag to indicate whether the map has loaded
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location) {
      this.geocodeAddress(location);
    } else {
      this.getCurrentLocation();
    }
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.setState({
            userLocation,
            mapCenter: userLocation, // Set mapCenter to user's location once available
            mapLoaded: true // Mark the map as loaded
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
          this.setState({ mapLoaded: true }); // Mark the map as loaded even if there's an error
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      this.setState({ mapLoaded: true }); // Mark the map as loaded if geolocation is not supported
    }
  }

  geocodeAddress(address) {
    const { google } = this.props;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        const mapCenter = {
          lat: location.lat(),
          lng: location.lng()
        };
        this.setState({
          mapCenter,
          mapLoaded: true
        });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
        this.getCurrentLocation();
      }
    });
  }

  render() {
    const { mapLoaded, mapCenter } = this.state;

    const mapContainerStyle = {
      width: '100%', // Set the width to 100%
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
        {!mapLoaded && <div>Loading...</div>}
        {mapLoaded && 
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={mapCenter} // Set initialCenter to mapCenter state value
          streetViewControl={false}
          showUserLocation={true}
        >

        </Map>
        }
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapWithSearch);

