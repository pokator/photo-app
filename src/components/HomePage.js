import React from 'react';

import GoogleApiWrapper from './MapWithSearch';
import MenuItem from './MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. 
import './HomePage.css';
import LocationComponent from './LocationComponent'

const menuItems = [
  {
    "id": 1,
    "title": "Zilker Bridge",
    "description": "Iconic bridge offering scenic views of Austin",
    "imageName": "bridge1.jpg",
    "location": "Austin, TX 78746"
  },
  {
    "id": 2,
    "title": "Ladybird Bridge",
    "description": "Bridge named after Lady Bird Lake, providing picturesque views",
    "imageName": "bridge2.jpg",
    "address" : "222 West Ave, Austin, TX 78701"
  },
  {
    "id": 3,
    "title": "Texas Capitol",
    "description": "Historical landmark and seat of Texas government",
    "imageName": "capitol.jpg"
  },
  {
    "id": 4,
    "title": "Graffiti Wall",
    "description": "Colorful mural-covered wall showcasing local art",
    "imageName": "graffiti-wall.jpg"
  },
  {
    "id": 5,
    "title": "Austin Skyline",
    "description": "Panoramic view of downtown Austin's skyline",
    "imageName": "skyline.jpg"
  },
  {
    "id": 6,
    "title": "South Congress",
    "description": "Vibrant street lined with eclectic shops and eateries",
    "imageName": "soco.jpeg"
  },
  {
    "id": 7,
    "title": "UT Tower",
    "description": "Iconic landmark of the University of Texas at Austin",
    "imageName": "tower.jpg"
  },
  {
    "id": 8,
    "title": "Under the Bridge",
    "description": "Famous spot under Congress Avenue Bridge known for bat watching",
    "imageName": "under-bridge.jpg"
  },
  {
    "id": 9,
    "title": "Barton Waterfall",
    "description": "Tranquil waterfall nestled within Barton Creek Greenbelt",
    "imageName": "waterfall.jpg"
  },
  {
    "id": 10,
    "title": "Zilker Waterfall",
    "description": "Scenic waterfall located in Zilker Metropolitan Park",
    "imageName": "zilker-waterfall.jpg"
  }
]

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="map-container">
        <GoogleApiWrapper />
      </div>
      <div className="menu-items-container">
        <div className="menu-items-scrollable">
          <MenuItem menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
