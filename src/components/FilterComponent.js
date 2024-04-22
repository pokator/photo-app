import { useState, useEffect } from 'react';
import { Select, MenuItem as MuiMenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '../firebase'
import MenuItem from './MenuItem';



function FilterComponent() {
    const [menuItems, setItems] = useState([]);
    const [filter, setFilter] = useState('');

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

    async function fetchDataFiltered(filter) {
        try {
            const q = query(collection(db, "locations"), where("tags", "array-contains", filter));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(items);
            console.log(items); 
        } catch (error) {
            console.error("Error fetching filtered data: ", error);
        }
    }

    useEffect(() => {
        fetchData(); 
    }, []);
    
    useEffect(() => {
        if (filter) { 
            fetchDataFiltered(filter);
        }
    }, [filter]);

    const handleChange = (event) => {
        setFilter(event.target.value);
        //fetchDataFiltered(event.target.value);
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
                style={{ outline: "2px solid red" }}
              >
                <MuiMenuItem value="Nature">Nature</MuiMenuItem>
                <MuiMenuItem value="Architecture">Architecture</MuiMenuItem>
                <MuiMenuItem value="Landscape">Landscape</MuiMenuItem>
                <MuiMenuItem value="Portraits">Portraits</MuiMenuItem>
                <MuiMenuItem value="City">City</MuiMenuItem>
                <MuiMenuItem value="Skyline">Skyline</MuiMenuItem>
              </Select>
            </FormControl>
          </Grid>

        <div className="menu-items-container">
            <div className="menu-items-scrollable">
                <MenuItem menuItems={menuItems} parent={"location"} />
            </div>
        </div>
      </div>
    );
}
export default FilterComponent;