import React from 'react';
import ImageCarousel from './ImageCarousel';
import MapWithSearch from './MapWithSearch';
import menuItems from "./HomePage"

const LocationPage = () => {
    const images = menuItems;

    return (
        <div className="location-page">
            <h1>Location name</h1>
            <ImageCarousel images={images} />
            <p>Description of the place</p>
            <p>Address</p>
            <MapWithSearch />
        </div>
    );
};

export default LocationPage;
