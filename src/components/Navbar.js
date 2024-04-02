import React, { useState } from 'react';
import './navbar.css'; // Import CSS for styling
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState('Home');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      <div
        className={`tab ${activeTab === 'Home' ? 'active' : ''}`}>
          <Link to="/">Home</Link>
      </div>
      <div
        className={`tab ${activeTab === 'Lists' ? 'active' : ''}`}
      ><Link to="list">Lists</Link>
      </div>
    </div>
  );
};

export default Navbar;
