import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';


const ListPage = () => {
    const { name } = useParams();
  
    // Use the 'name' parameter in your component
  
    return (
      <div>
        <h1>List Page for {name}</h1>
        {/* Render the content for the list page */}
      </div>
    );
  };
  

export default ListPage;
