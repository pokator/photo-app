// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';
// import "../App.css";

// const MenuItem = ({ menuItems, parent, showDeleteButton, onDelete }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (menuItem) => {
//     navigate(`/location/${menuItem.Name}`);
//   };

//   const handleDeleteClick = (event, itemId) => {
//     event.stopPropagation();
//     onDelete(itemId);
//   };

//   return (
//     <>
//       {menuItems.map((menuItem) => (
//         <Grid container key={menuItem.id} onClick={() => handleCardClick(menuItem)}>
//           <Card className="menu-item-card" sx={{ backgroundColor: "#FEF7FF", borderRadius: "10px" }}>
//             <CardContent>
//               <Grid container alignItems="center" spacing={1}>
//                 <Grid item xs={4} sm={4}>
//                   <CardMedia
//                     component="img"
//                     image={menuItem.photo_links}
//                     alt={`Photo of ${menuItem.Name}`}
//                     sx={{ width: '100%', maxHeight: '100%' }}
//                   />
//                 </Grid>
//                 <Grid item xs={8} sm={8} spacing={1} container>
//                   <Grid item xs={9} sm={9}>
//                     <Typography variant="h5" component="h2" gutterBottom>
//                       {menuItem.Name}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       {menuItem.address}
//                     </Typography>
//                   </Grid>
//                   {showDeleteButton && (
//                     <Grid item xs="auto" sm="auto" alignItems="center">
//                       <IconButton onClick={(e) => handleDeleteClick(e, menuItem.id)}>
//                         <DeleteIcon/>
//                       </IconButton>
//                     </Grid>
//                   )}
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </>
//   );
// };

// export default MenuItem;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "../App.css";

const MenuItem = ({ menuItems, parent, showDeleteButton, onDelete }) => {
  const navigate = useNavigate();

  const handleCardClick = (menuItem) => {
    navigate(`/location/${menuItem.Name}`);
  };

  const handleDeleteClick = (event, itemId) => {
    event.stopPropagation();
    onDelete(itemId);
  };

  return (
    <Grid container spacing={2} className="row">
      {menuItems.map((menuItem, index) => (
        <Grid key={menuItem.id} item xs={6} sm={6} onClick={() => handleCardClick(menuItem)} className="menu-item-card">
          <Card className="menu-item-card" sx={{ backgroundColor: "#FEF7FF", borderRadius: "10px" }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {menuItem.Name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuItem.address}
              </Typography>
              {showDeleteButton && (
                <IconButton onClick={(e) => handleDeleteClick(e, menuItem.id)}>
                  <DeleteIcon/>
                </IconButton>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuItem;
