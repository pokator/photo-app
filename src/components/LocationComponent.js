import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapWithSearch from "./MapWithSearch";
import AddElementToList from "./AddListPopup";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./LocationComponent.css";
import { Paper, Typography, Chip } from "@mui/material";
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
        console.log("Fetched items:", items);
        setItems(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [name]);

  useEffect(() => {
    const place = itemList.find((item) => item.Name === decodedName);
    setMenuItem(place);

    console.log("Updated menuItem: ", menuItem);
  }, [itemList, decodedName]);

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
        <div className="rounded-div">
            <img src = {menuItem.photo_links} width = "100%"/>
        </div>
          
          
          <Paper
            elevation={0}
            elevation={0}
            style={{
              padding: "8px",
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Notes sx={{ marginRight: "8px" }} />{" "}
            <Typography variant="body1">{menuItem.description}</Typography>
          </Paper>
          <Paper
            elevation={1}
            elevation={1}
            onClick={handleLocationClick}
            style={{
              cursor: "pointer",
              padding: "8px",
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Room sx={{ mr: 1, color: "#6750A4" }} />
            <Typography variant="body1">{menuItem.address}</Typography>
          </Paper>
          <div style={{ marginTop: "16px", display: "flex", alignItems: "center" }}>
            {menuItem.tags && menuItem.tags.length > 0 && (
              <Typography variant="subtitle1" style={{ marginRight: "8px", alignItems: "center",  marginTop: "5px" }}>Tags:</Typography>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "8px" }}>
              {menuItem.tags &&
                menuItem.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    style={{
                      margin: "4px",
                      backgroundColor: "#F3E5F5",
                      color: "#673AB7",
                    }}
                  />
                ))}
            </div>
          </div>
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
