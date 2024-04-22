import React from 'react';
import { useParams } from "react-router-dom";
import ImageCarousel from './ImageCarousel';
import MapWithSearch from './MapWithSearch';
import { menuItems } from "./HomePage"
import AddElementToList from './AddListPopup';

const LocationPage = () => {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);
    const menuItem = menuItems.find(item => item.title === decodedName);
    const handleLocationClick = () => {
        // Construct Google Maps URL with the location address
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(menuItem.location)}`;
        // Open the address in a new tab
        window.open(mapsUrl, '_blank');
    };

    return (
        <div className="location-page">
            <h1>{decodedName}</h1>
            <ImageCarousel images={menuItem.images} />
            <p>{menuItem.description}</p>
            <p onClick={handleLocationClick} style={{ cursor: 'pointer' }}>{menuItem.location}</p>
            <MapWithSearch location={menuItem.location}/>
            <AddElementToList menuItem={menuItem}/>
        </div>
    );
};

export default LocationPage;
