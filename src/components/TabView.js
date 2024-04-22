import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const TabView = ({ tabs }) => {
  const location = useLocation();

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.path === location.pathname
  );

  return (
    <AppBar position="static" style={{ backgroundColor: "#FEF7FF" }}>
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
              color: "black"
            }}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default TabView;