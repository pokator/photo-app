import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: theme.spacing(1), // Adjust the value as needed
    cursor: "pointer", // Add cursor pointer to indicate it's clickable
  },
}));

function ListItem({ name, onDelete, onCardClick }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (event) event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    if (event) event.stopPropagation();
    setAnchorEl(null);
  };

  const handleDelete = (event) => {
    if (event) event.stopPropagation();
    onDelete(name);
    handleClose();
  };

  const handleCardClick = () => {
    // Navigate to the ListPage with the list name as a URL parameter
    navigate(`/lists/${name}`);
  };

  const handleMenuClick = (event) => {
    // Prevent the click event from bubbling up to the Card
    if (event) event.stopPropagation();
  };

  return (
    <Card className={classes.card} onClick={handleCardClick}>
      <CardHeader
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onClick={handleMenuClick}
            >
              <MenuItem onClick={handleDelete}>
                <DeleteIcon />
                Delete
              </MenuItem>
            </Menu>
          </>
        }
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Some picture or content here...
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ListItem;
