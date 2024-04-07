import './App.css';
import HomePage from './components/HomePage';
import List from "./components/List";
import React from 'react';
import TabView from './components/TabView';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const FullHeightContainer = ({ children }) => (
  <div style={{ height: '100vh' }}>
    {children}
  </div>
);

function App() {
  const tabs = [
    {
      title: 'Home',
      content: <HomePage/>,
    },
    {
      title: 'Lists',
      content: <List/>,
    }
  ];

  return (
    <FullHeightContainer>
      <Paper elevation={3}>
        <TabView tabs={tabs} />
      </Paper>
    </FullHeightContainer>
  );
}

export default App;
