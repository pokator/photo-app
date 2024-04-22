import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

class MapWithSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: null,
      mapCenter: { lat: 37.774929, lng: -122.419416 },
      showUserLocation: true,
      mapLoaded: false,
      menuItems: [], // Add state for menu items
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location) {
      this.geocodeAddress(location);
    } else {
      this.getCurrentLocation();
      this.fetchData();
    }
  }

  async fetchData() {
    try {
      const q = query(collection(db, "locations"));
      const querySnapshot = await getDocs(q);
      const fetchedItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.setState({ menuItems: fetchedItems }); // Update menuItems state
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.setState({
            userLocation,
            mapCenter: userLocation, // Set mapCenter to user's location once available
            mapLoaded: true, // Mark the map as loaded
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
          this.setState({ mapLoaded: true }); // Mark the map as loaded even if there's an error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      this.setState({ mapLoaded: true }); // Mark the map as loaded if geolocation is not supported
    }
  }

  geocodeAddress(address) {
    // Implement geocodeAddress function
    const { google } = this.props;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        const mapCenter = {
          lat: location.lat(),
          lng: location.lng(),
        };
        this.setState({
          mapCenter,
          mapLoaded: true,
        });
      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          status
        );
        this.getCurrentLocation();
      }
    });
  }

  handleMarkerClick(markerData) {
    const { Name } = markerData;
    // Call the handleNavigation function passed from the parent component
    this.props.handleNavigation(`/location/${Name}`);
  }

  render() {
    const { mapCenter, mapLoaded, menuItems } = this.state;

    const mapContainerStyle = {
      width: "100%",
      height: "400px",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
    };

    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    return (
      <div className="search-bar" style={mapContainerStyle}>
        {!mapLoaded && <div>Loading...</div>}
        {mapLoaded && (
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={mapCenter}
            streetViewControl={false}
            showUserLocation={true}
          >
            {menuItems.map((item) => (
              <Marker
                key={item.id}
                position={{
                  lat: item.coords.latitude,
                  lng: item.coords.longitude,
                }}
                title={item.Name}
                onClick={() => this.handleMarkerClick(item)}
              />
            ))}
            <Marker
              position={{ lat: mapCenter.lat, lng: mapCenter.lng }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Blue marker icon
              }}
            />
          </Map>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapWithSearch);
