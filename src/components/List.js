// import Navbar from "./Navbar";
// import React, { useState, useEffect } from "react";
// import ListComponent from "./ListComponent";
// import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles.

// function List() {
//   const [lists, setLists] = useState([]);
//   const [listName, setListName] = useState("");

//   useEffect(() => {
//     // Load lists from localStorage when component mounts
//     const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
//     setLists(storedLists);
//   }, []);

//   const handleAddList = (e) => {
//     e.preventDefault();
//     if (!listName.trim()) return;
//     const updatedLists = [...lists, listName];
//     setLists([...lists, listName]);
//     setListName("");
//     localStorage.setItem("lists", JSON.stringify(updatedLists));
//   };

//   const handleDeleteList = (name) => {
//     setLists(lists.filter((list) => list !== name));
//   };

//   return (
//     <div>
//       {/* <Navbar /> */}
//       <form onSubmit={handleAddList}>
//         <input
//           type="text"
//           placeholder="Enter list name"
//           value={listName}
//           onChange={(e) => setListName(e.target.value)}
//         />
//         <button type="submit">Add List</button>
//       </form>
//       <div>
//         {lists.map((name, index) => (
//           <ListComponent key={index} name={name} onDelete={handleDeleteList} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default List;


import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles.

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function List() {
  const classes = useStyles();
  const [lists, setLists] = useState([]);
  const [listName, setListName] = useState("");

  useEffect(() => {
    // Load lists from localStorage when component mounts
    const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
    setLists(storedLists);
  }, []);

  const handleAddList = (e) => {
    e.preventDefault();
    if (!listName.trim()) return;
    const updatedLists = [...lists, listName];
    setLists(updatedLists);
    setListName("");
    localStorage.setItem("lists", JSON.stringify(updatedLists));
  };

  const handleDeleteList = (name) => {
    const updatedLists = lists.filter((list) => list !== name);
    setLists(updatedLists);
    localStorage.setItem("lists", JSON.stringify(updatedLists));
  };

  return (
    <div>
      <form onSubmit={handleAddList}>
        <input
          type="text"
          placeholder="Enter list name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <button type="submit">Add List</button>
      </form>
      <div>
        {lists.map((name, index) => (
          <Card key={index} className={classes.card}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Some picture or content here...
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteList(name)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default List;
