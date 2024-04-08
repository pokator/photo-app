import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import TabView from './components/TabView';
import Paper from '@mui/material/Paper';
import HomePage from './components/HomePage';
import List from './components/List';

const FullHeightContainer = ({ children }) => (
  <div style={{ height: '100vh' }}>
    {children}
  </div>
);

function App() {
  const tabs = [
    {
      title: 'Home',
      path: '/',
      exact: true,
    },
    {
      title: 'Lists',
      path: '/lists',
      exact: false,
    }
  ];

  return (
    <Router>
      <FullHeightContainer>
        <Paper elevation={3}>
          <TabView tabs={tabs} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lists" element={<List />} />
            {/* Add more routes as needed */}
          </Routes>
        </Paper>
      </FullHeightContainer>
    </Router>
  );
}

export default App;