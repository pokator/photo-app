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

    return (
        <div className="location-page">
            <h1>{decodedName}</h1>
            <ImageCarousel images={menuItem.images} />
            <p>Description of the place</p>
            <p>Address</p>
            <MapWithSearch />
            <AddElementToList menuItem={menuItem}/>
        </div>
    );
};

export default LocationPage;
