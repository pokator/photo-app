import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const TabView = ({ tabs }) => {
  const location = useLocation();

  // Find the index of the current route in the tabs array
  const currentTabIndex = tabs.findIndex(
    (tab) => tab.path === location.pathname
  );

  return (
    <AppBar position="static" style={{ backgroundColor: "#fff" }}>
      <Tabs
        value={currentTabIndex}
        aria-label="tabs"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.title}
            component={Link}
            to={tab.path}
            style={{
              minWidth: 0,
              flex: 1,
              fontWeight: currentTabIndex === index ? "bold" : "normal",
            }}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default TabView;