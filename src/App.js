// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import TabView from './components/TabView';
// import Paper from '@mui/material/Paper';
// import HomePage from './components/HomePage';
// import List from './components/List';
// import ListPage from './components/ListPage';
// import { useNavigate } from 'react-router-dom';

// const FullHeightContainer = ({ children }) => (
//   <div style={{ height: '100vh' }}>
//     {children}
//   </div>
// );

// function App() {
//   const tabs = [
//     {
//       title: 'Home',
//       path: '/',
//       exact: true,
//     },
//     {
//       title: 'Lists',
//       path: '/lists',
//       exact: false,
//     }
//   ];

//   const location = useLocation();
//   const isListsPage = location.pathname.startsWith('/lists');

//   return (
//     <Router>
//       <FullHeightContainer>
//         <Paper elevation={3}>
//           <TabView tabs={tabs} />
//           <div className='spacer'/>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/lists" element={<List />} />
//             <Route path="/list/:name" element={<ListPage />} /> {/* Route for ListPage with parameter */}
//           </Routes>
//         </Paper>
//       </FullHeightContainer>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TabView from "./components/TabView";
import Paper from "@mui/material/Paper";
import HomePage from "./components/HomePage";
import List from "./components/List";
import ListPage from "./components/ListPage";
import ListHeader from "./components/ListHeader";

const FullHeightContainer = ({ children }) => (
  <div style={{ height: "100vh" }}>{children}</div>
);

function App() {
  return (
    <Router>
      <FullHeightContainer>
        <Paper elevation={3}>
          <Header />
          <div className="spacer" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lists" element={<List />} />
            <Route path="/list/:name" element={<ListPage />} />
            {/* Route for ListPage with parameter */}
          </Routes>
          ;
        </Paper>
      </FullHeightContainer>
    </Router>
  );
}

function Inner() {
  const { pathname, hash, key } = useLocation();
}

function Header() {
  const location = useLocation();
  const isTabsVisible =
    location.pathname === "/" || location.pathname === "/lists";
  const tabs = [
    {
      title: "Home",
      path: "/",
      exact: true,
    },
    {
      title: "Lists",
      path: "/lists",
      exact: false,
    },
  ];

  return <>{isTabsVisible ? <TabView tabs={tabs} /> : <ListHeader />}</>;
}

export default App;
