// import React from "react";
// import "../App.css";

// const MenuItem = ({ menuItems }) => {
//   return (
//     <>
//       {menuItems.map((menuItem) => (
//         <div className="row" key={menuItem.id}>
//           <div className="col-5">
//             <div className="card-body d-flex flex-column align-items-center justify-content-center">
//               <img
//                 src={`images/${menuItem.imageName}`}
//                 style={{ width: "90%", height: "auto" }}
//                 className="image"
//                 alt={`Photo of ${menuItem.imageName}`}
//               />
//             </div>
//           </div>

//           <div className="col-7">
//             <div className="card-body d-flex flex-column align-items-left justify-content-left">
//               <div>
//                 <h5 className="card-title">{menuItem.title}</h5>
//                 <p className="card-text">{menuItem.description}</p>

//                 <div className="d-flex justify-content-between align-items-center">
//                   <p className="card-price">{menuItem.price}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default MenuItem;

import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    marginBottom: "20px",
    borderRadius: "5%"
  },
  media: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const MenuItem = ({ menuItems }) => {
  const classes = useStyles();

  return (
    <>
      {menuItems.map((menuItem) => (
        <Card className={classes.card} key={menuItem.id}>
          <CardMedia
            component="img"
            image={`images/${menuItem.imageName}`}
            className={classes.media}
            alt={`Photo of ${menuItem.imageName}`}
          />
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h2">
              {menuItem.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {menuItem.description}
            </Typography>
            <Typography variant="h6" component="p">
              {menuItem.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default MenuItem;
