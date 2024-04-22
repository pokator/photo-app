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
    const [itemList, setItems] = useState([]);
    const [menuItem, setMenuItem] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "locations"));
                const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("Fetched items:", items);  // Check the structure and content of fetched items
                setItems(items);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
    
        fetchData(); 
    }, [name]); 
    
    useEffect(() => {
        const place = itemList.find(item => item.Name === decodedName);
        
        //console.log("item list: ", itemList);
        //console.log("decoded name: ", decodedName);
        setMenuItem(place);
        
        console.log("Updated menuItem: ", menuItem);
    });
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
            
            <AddElementToList menuItem={menuItem || {}} />
        </div>
    );
};

export default LocationPage;
