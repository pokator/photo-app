import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Add } from "@mui/icons-material"; 

function AddElementToList({ menuItem }) {
  const [lists, setLists] = useState({}); 
  const [open, setOpen] = useState(false);
  const [selectedLists, setSelectedLists] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem("lists")) || {};
    setLists(storedLists);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLists([...selectedLists, value]);
    } else {
      setSelectedLists(selectedLists.filter((list) => list !== value));
    }
  };

  const handleAdd = () => {
    selectedLists.forEach(listName => {
      console.log("Processing list:", listName);
      if (Array.isArray(lists[listName])) {
        console.log("Current list items:", lists[listName]);
        if (!lists[listName].find(element => element.id === menuItem.id)) {
          console.log("Element not found in list. Adding...");
          const updatedList = [...lists[listName], menuItem];
          console.log("Updated list:", updatedList);
          localStorage.setItem("lists", JSON.stringify({...lists, [listName]: updatedList}));
        } else {
          console.log("Element already exists in list.");
        }
      } else {
        console.error(`${listName} is not an array.`);
      }
    });
    console.log("Selected lists processed.");
    setSelectedLists([]);
    console.log("Selected lists cleared.");
    handleClose();
    console.log("Dialog closed.");
  };
  

  return (
    <div>
      <Button 
      variant="contained"
      onClick={handleOpen} 
      startIcon={<Add style={{ color: 'black' }}/>}
      sx={{ 
        position: "fixed", 
        bottom: 16, right: 
        16, 
        backgroundColor: "#ECE6F0",
        color: "black" }}>
        Add to List
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Element to List</DialogTitle>
        <DialogContent>
          {Object.keys(lists).map((listName) => (
            <FormControlLabel
              key={listName}
              control={
                <Checkbox
                  checked={selectedLists.includes(listName)}
                  onChange={handleCheckboxChange}
                  value={listName}
                />
              }
              label={listName}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddElementToList;
