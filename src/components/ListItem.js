import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: theme.spacing(1), 
    cursor: "pointer",
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
    navigate(`/lists/${name}`);
  };

  const handleMenuClick = (event) => {
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
              style={{borderRadius: "10px"}}
            >
              <MenuItem onClick={handleDelete} >
                <DeleteIcon />
                Delete
              </MenuItem>
            </Menu>
          </>
        }
        title={name}
      />
    </Card>
  );
}

export default ListItem;
