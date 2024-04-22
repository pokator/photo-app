// import React from "react";
// import { Link } from 'react-router-dom';
// import "../App.css";
// import { useNavigate } from "react-router-dom";
// import './MenuItem.css'; // Import CSS for styling


// const MenuItem = ({ menuItems, parent }) => {
//   const navigate = useNavigate();
//   console.log(menuItems);

//   const handleCardClick = (menuItem) => {
//     // Navigate to the ListPage with the list name as a URL parameter
//     navigate(`/location/${menuItem.title}`);
//   };

//   return (
//     <>
//       {menuItems && menuItems.map((menuItem) => (
//           <div className="row" key={menuItem.id} onClick={() => handleCardClick(menuItem)}>
//             <div className="col-5">
//               <div className="card-body d-flex flex-column align-items-center justify-content-center">
//                 <img 
//                   src={`images/${menuItem.images[0]}`}
//                   style={{ width: "90%", height: "auto" }}
//                   className="image"
//                   alt={`Photo of ${menuItem.images[0]}`}
//                 />
//               </div>
//             </div>

//             <div className="col-7">
//               <div className="card-body d-flex flex-column align-items-left justify-content-left">
//                 <div>
//                   <h5 className="card-title">{menuItem.title}</h5>
//                   <p className="card-text">{menuItem.description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
          
//       ))}
//     </>
//   );
// };

// export default MenuItem;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "../App.css";

const MenuItem = ({ menuItems, parent, showDeleteButton, onDelete }) => {
  const navigate = useNavigate();

  const handleCardClick = (menuItem) => {
    navigate(`/location/${menuItem.title}`);
  };

  const handleDeleteClick = (event, itemId) => {
    event.stopPropagation(); // Stop propagation of the click event
    onDelete(itemId); // Call the onDelete function
  };

  return (
    <>
      {menuItems.map((menuItem) => (
        <Grid container key={menuItem.id} onClick={() => handleCardClick(menuItem)}>
          <Card className="menu-item-card">
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={4} sm={4}>
                  <CardMedia
                    component="img"
                    image={`images/${menuItem.images[0]}`}
                    alt={`Photo of ${menuItem.images[0]}`}
                    sx={{ width: '100%', maxHeight: '100%' }}
                  />
                </Grid>
                <Grid item xs={8} sm={8} spacing={1} container>
                  <Grid item xs={9} sm={9}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {menuItem.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {menuItem.description}
                    </Typography>
                  </Grid>
                  {showDeleteButton && (
                    <Grid item xs="auto" sm="auto" alignItems="center">
                      <IconButton onClick={(e) => handleDeleteClick(e, menuItem.id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default MenuItem;

