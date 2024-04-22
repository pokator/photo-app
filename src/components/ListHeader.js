import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CustomAppBar = ({ title }) => {
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);

  

  const handleGoBack = () => {
    navigate(-1); // This will go back one step in the history
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "#FEF7FF" }}>
        <IconButton
          edge="start"
          color="#000000"
          aria-label="back"
          onClick={handleGoBack}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
          {decodedTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
