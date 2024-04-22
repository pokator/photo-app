import { useState, useEffect } from 'react';
import { Select, MenuItem as MuiMenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { collection, query, where, getDocs, or } from 'firebase/firestore';
import {db} from '../firebase'
import MenuItem from './MenuItem';
import SearchBar from './SearchBar';
import './HomePage.css';

function FilterComponent() {
    const [menuItems, setItems] = useState([]);
    const [filter, setFilter] = useState('');
    const [searchQuery, setSearch] = useState('');

    async function fetchData() {
        try {
            const q = query(collection(db, "locations"));
            const querySnapshot = await getDocs(q);
            const fetchedItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(fetchedItems); 
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    async function fetchDataFiltered(filter, searchQuery) {
        console.log("Sending query to Firestore with filter:", filter, "and search query:", searchQuery);
        try {
            let q = query(collection(db, "locations"));
            
            // Apply filter condition
            if(filter && filter != "None"){
                q = query(q, where("tags", "array-contains", filter));
            }
    
            // Fetch all data from Firestore without any search condition if searchQuery is empty
            const querySnapshot = await getDocs(q);
            let items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
            // Apply client-side search filtering if searchQuery is not empty
            if (searchQuery) {
                items = items.filter(item => {
                    // Convert both search query and item name to lowercase for case-insensitive comparison
                    const itemName = item.Name.toLowerCase();
                    const query = searchQuery.toLowerCase();
        
                    // Check if the item name contains the search query
                    return itemName.includes(query);
                });
            }
    
            // Update the items state with the filtered data
            setItems(items);
        } catch (error) {
            console.error("Error fetching filtered data: ", error);
        }
    }
    
    useEffect(() => {
        fetchData(); 
    }, []);
    
    useEffect(() => {
        console.log("Updated search query:", searchQuery);
        if (filter != "None" || searchQuery) { 
            fetchDataFiltered(filter, searchQuery);
        } else {
            // If both filter and searchQuery are empty, fetch all data
            fetchData();
        }
    }, [filter, searchQuery]);

    const handleChange = (event) => {
        setFilter(event.target.value);
        
        //fetchDataFiltered(event.target.value);
    };

    const handleSearch = (query) => {
        console.log(query);
        setSearch(query);
    };

    return (
        <div className="dropdowns">
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="location-type-label">Location Type</InputLabel>
              <Select
                labelId="location-type-label"
                id="location-type-select"
                onChange={handleChange}
              >
                <MuiMenuItem value="None">None</MuiMenuItem>
                <MuiMenuItem value="Nature">Nature</MuiMenuItem>
                <MuiMenuItem value="Architecture">Architecture</MuiMenuItem>
                <MuiMenuItem value="Landscape">Landscape</MuiMenuItem>
                <MuiMenuItem value="Portraits">Portraits</MuiMenuItem>
                <MuiMenuItem value="City">City</MuiMenuItem>
                <MuiMenuItem value="Skyline">Skyline</MuiMenuItem>
              </Select>
            </FormControl>
          </Grid>
          <div className='spacer'/>
          <SearchBar onSearch={handleSearch} />
        <div className="menu-items-container">
            <div className="menu-items-scrollable">
                <MenuItem menuItems={menuItems} parent={"location"} />
            </div>
        </div>
      </div>
    );
}
export default FilterComponent;