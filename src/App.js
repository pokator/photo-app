import './App.css';
import React, {useState, useEffect} from 'react';
import HomePage from './components/HomePage';
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<List />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
