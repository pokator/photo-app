import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ImageCarousel from './ImageCarousel';
import MapWithSearch from './MapWithSearch';
//import { menuItems } from "./HomePage"
import AddElementToList from './AddListPopup';
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";


function LocationPage() {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);
    const [itemList, setItemList] = useState([]);
    const [menuItem, setMenuItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "locations"));
                const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log(items);
                setItemList(items);
                
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        
    }, [name]); 
    
    useEffect(() => {
        const item = itemList.find(item => item.name === decodedName);
        setMenuItem(item);
    }, [itemList, decodedName]);
    //const menuItem = itemList.find(item => item.title === decodedName);
    const handleLocationClick = () => {
        // Construct Google Maps URL with the location address
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(menuItem.location)}`;
        // Open the address in a new tab
        window.open(mapsUrl, '_blank');
    };

    return (
        <div className="location-page">
            <h1>{decodedName}</h1>
            {menuItem ? (
                <>
                    <ImageCarousel images={menuItem.images || []} />
                    <p>{menuItem.description}</p>
                    <p onClick={handleLocationClick} style={{ cursor: 'pointer' }}>{menuItem.address}</p>
                </>
            ) : (
                <p>Loading or no data available.</p>
            )}
            <MapWithSearch location={menuItem.location}/>
            <AddElementToList menuItem={menuItem || {}} />
        </div>
    );
};

export default LocationPage;
