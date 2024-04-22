import React, { useState, useEffect } from 'react';
import GoogleApiWrapper from './MapWithSearch';
import MenuItem from './MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles.
import './HomePage.css';
import SearchBar from './SearchBar';
import { Select, MenuItem as MuiMenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import {db} from '../firebase'
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import FilterComponent from './FilterComponent';


function HomePage() {
  
  return (
    <div className="home-page-container">
      <SearchBar/>
      <div className='spacer'/>
      <div className="map-container">
        <GoogleApiWrapper />
      </div>

      <FilterComponent component />

      
    </div>
  );
}

export default HomePage;

