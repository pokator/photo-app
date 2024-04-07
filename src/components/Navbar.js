import React, { useState } from 'react';
import './navbar.css'; // Import CSS for styling
import { Link } from "react-router-dom";


const Navbar = () => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState('Home');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      <Link className={`tab ${activeTab === 'Home' ? 'active' : ''}`} to="/" onClick={() => handleTabChange('Home')}>Home</Link>
      <Link className={`tab ${activeTab === 'Lists' ? 'active' : ''}`} to="/list" onClick={() => handleTabChange('Lists')}>Lists</Link>
    </div>
  );
};

export default Navbar;
