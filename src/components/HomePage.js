import React from 'react';
import GoogleApiWrapper from './MapWithSearch';
import MenuItem from './MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles.
import './HomePage.css';
import SearchBar from './SearchBar';
import { Select, MenuItem as MuiMenuItem, FormControl, InputLabel, Grid } from '@mui/material';

export const menuItems = [
  {
    "id": 1,
    "title": "Zilker Bridge",
    "description": "Iconic bridge offering scenic views of Austin",
    "images": ["bridge1.jpg"],
    "location": "Austin, TX 78746"
  },
  {
    "id": 2,
    "title": "Ladybird Bridge",
    "description": "Bridge named after Lady Bird Lake, providing picturesque views",
    "images": ["bridge2.jpg"],
    "address" : "222 West Ave, Austin, TX 78701"
  },
  {
    "id": 3,
    "title": "Texas Capitol",
    "description": "Historical landmark and seat of Texas government",
    "images": ["capitol.jpg"]
  },
  {
    "id": 4,
    "title": "Graffiti Wall",
    "description": "Colorful mural-covered wall showcasing local art",
    "images": ["graffiti-wall.jpg"]
  },
  {
    "id": 5,
    "title": "Austin Skyline",
    "description": "Panoramic view of downtown Austin's skyline",
    "images": ["skyline.jpg"]
  },
  {
    "id": 6,
    "title": "South Congress",
    "description": "Vibrant street lined with eclectic shops and eateries",
    "images": ["soco.jpeg"]
  },
  {
    "id": 7,
    "title": "UT Tower",
    "description": "Iconic landmark of the University of Texas at Austin",
    "images": ["tower.jpg"]
  },
  {
    "id": 8,
    "title": "Under the Bridge",
    "description": "Famous spot under Congress Avenue Bridge known for bat watching",
    "images": ["under-bridge.jpg"]
  },
  {
    "id": 9,
    "title": "Barton Waterfall",
    "description": "Tranquil waterfall nestled within Barton Creek Greenbelt",
    "images": ["waterfall.jpg"]
  },
  {
    "id": 10,
    "title": "Zilker Waterfall",
    "description": "Scenic waterfall located in Zilker Metropolitan Park",
    "images": ["zilker-waterfall.jpg"]
  }
]

function HomePage() {
  return (
    <div className="home-page-container">
      <SearchBar/>
      <div className='spacer'/>
      <div className="map-container">
        <GoogleApiWrapper />
      </div>

      <div className="dropdowns">
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="location-type-label">Location Type</InputLabel>
              <Select
                labelId="location-type-label"
                id="location-type-select"
                defaultValue=""
              >
                <MuiMenuItem value="1">Nature</MuiMenuItem>
                <MuiMenuItem value="2">Architecture</MuiMenuItem>
                <MuiMenuItem value="3">Landscape</MuiMenuItem>
                <MuiMenuItem value="1">Portraits</MuiMenuItem>
                <MuiMenuItem value="2">City</MuiMenuItem>
                <MuiMenuItem value="3">Skyline</MuiMenuItem>
              </Select>
            </FormControl>
          </Grid>
      </div>

      <div className="menu-items-container">
        <div className="menu-items-scrollable">
          <MenuItem menuItems={menuItems} parent={"location"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
