import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles.
import './HomePage.css';
import FilterComponent from './FilterComponent';
import MapWithSearch from './MapWithSearch';
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();
  const handleNavigation = (location) => {
    navigate(location);
  };

  return (
    <div className="home-page-container">
      <div className='spacer'/>
      <div className="map-container">
        <MapWithSearch handleNavigation={handleNavigation}/>
      </div>
      <FilterComponent component />
    </div>
  );
}

export default HomePage;

