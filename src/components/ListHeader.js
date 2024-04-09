import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CustomAppBar = ({ title }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will go back one step in the history
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={handleGoBack}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
