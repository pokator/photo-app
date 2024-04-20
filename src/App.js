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
import LocationPage from "./components/LocationComponent";

const FullHeightContainer = ({ children }) => (
  <div style={{ height: "100vh"}}>{children}</div>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <FullHeightContainer>
        {/* <Paper elevation={3}> */}
          <Header />
          <div className="spacer" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lists" element={<List />} />
            <Route path="/lists/:list" element={<ListPage />} />
            <Route path="/location/:name" element={<LocationPage />} />
          </Routes>
        {/* </Paper> */}
      </FullHeightContainer>
    </Router>
  );
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

  // Define the title based on the current route
  let title = "";
  if (location.pathname.startsWith("/list")) {
    // Extract the name from the route parameter
    const name = location.pathname.split("/")[2];
    // Set the title based on the name
    title = `List: ${name}`;
  } else if (location.pathname.startsWith("/location")) {
    // Extract the name from the route parameter
    const name = location.pathname.split("/")[2];
    // Set the title based on the name
    title = `Location: ${name}`;
  }

  return <>{isTabsVisible ? <TabView tabs={tabs} /> : <ListHeader title={title}/>}</>;
}

export default App;
