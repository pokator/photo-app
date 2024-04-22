import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { Button, Container } from "@mui/material";
import ListPage from "./ListPage";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import "./list.css"; // Import the CSS stylesheet

import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  const [lists, setLists] = useState({}); 
  const [openDialog, setOpenDialog] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [selectedList, setSelectedList] = useState(null);

  const handleCardClick = (name) => {
    setSelectedList(name);
  };

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem("lists")) || {};
    setLists(storedLists);
  }, []);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    setNewListName(e.target.value);
  };

  const handleAddList = () => {
    if (!newListName.trim()) return;
    const updatedLists = {
      ...lists,
      [newListName]: [],
    }; 
    setLists(updatedLists);
    console.log(
      "printing the initial list length: " + updatedLists[newListName].length
    );
    setNewListName("");
    localStorage.setItem("lists", JSON.stringify(updatedLists));
    handleCloseDialog();
  };

  const handleDeleteList = (name) => {
    const updatedLists = { ...lists };
    delete updatedLists[name]; // Remove the key-value pair from lists
    setLists(updatedLists);
    localStorage.setItem("lists", JSON.stringify(updatedLists));
  };

  return (
    <div>
      {selectedList ? (
        <div>
          {console.log("Selected List:", lists[selectedList])}{" "}
          {/* Debug statement */}
          <ListPage />
        </div>
      ) : (
        <div className="cardContainer">
          {Object.keys(lists).map((name) => (
            <ListItem
              key={name}
              name={name}
              onDelete={handleDeleteList}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      )}
      <Container className="addContainer">
        <Button
          variant="contained"
          onClick={handleOpenDialog}
          startIcon={<Add style={{ color: 'black' }}/>}
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "10px",
            backgroundColor: "#FEF7FF",
            color: "black"
          }} // Add padding to the button
        >
          Add New List
        </Button>
        <Dialog
          className="list-dialog"
          open={openDialog}
          onClose={handleCloseDialog}
        >
          <DialogTitle>Add New List</DialogTitle>
          <DialogContent>
            <Typography variant="subtitle1" gutterBottom>
              Add a title and image for your new list.
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="list-name"
              label="List Name"
              type="text"
              fullWidth
              value={newListName}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions style={{color: "#6750A4"}}>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleAddList}>Add</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default List;
