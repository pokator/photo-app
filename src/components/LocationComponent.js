import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import MapWithSearch from "./MapWithSearch";
//import { menuItems } from "./HomePage"
import AddElementToList from "./AddListPopup";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./LocationComponent.css";
import { Paper, Typography } from "@mui/material";
import { Room, Notes } from "@mui/icons-material";

function LocationPage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const [itemList, setItems] = useState([]);
  const [menuItem, setMenuItem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "locations"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched items:", items); // Check the structure and content of fetched items
        setItems(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [name]);

  useEffect(() => {
    const place = itemList.find((item) => item.Name === decodedName);

    //console.log("item list: ", itemList);
    //console.log("decoded name: ", decodedName);
    setMenuItem(place);

    console.log("Updated menuItem: ", menuItem);
  }, [itemList, decodedName]);

  //const menuItem = itemList.find(item => item.title === decodedName);
  const handleLocationClick = () => {
    // Construct Google Maps URL with the location address
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      menuItem.address
    )}`;
    // Open the address in a new tab
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="location-page">
      <h1>{decodedName}</h1>
      {menuItem ? (
        <>
          <ImageCarousel images={menuItem.images || []} />
          <Paper
            elevation={0} // Controls the depth of the shadow
            style={{
              padding: "8px",
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Notes sx={{ marginRight: "8px" }} />{" "}
            {/* Icon indicating the description */}
            <Typography variant="body1">{menuItem.description}</Typography>
          </Paper>
          {/* <p onClick={handleLocationClick} style={{ cursor: 'pointer' }}>{menuItem.address}</p> */}
          <Paper
            elevation={1} // Controls the depth of the shadow
            onClick={handleLocationClick}
            style={{
              cursor: "pointer",
              padding: "8px",
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Room sx={{ mr: 1, color: "#6750A4" }} /> {/* Icon indicating the location */}
            <Typography variant="body1">{menuItem.address}</Typography>
          </Paper>
          <div className="spacer" />
          <MapWithSearch location={menuItem.address} />
          <AddElementToList menuItem={menuItem || {}} />
        </>
      ) : (
        <p>Loading or no data available.</p>
      )}
    </div>
  );
}

export default LocationPage;
