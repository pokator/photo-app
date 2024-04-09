import React from "react";
import MenuItem from "./MenuItem";

const ListPage = ({ list }) => {
  // Destructure the props object to extract the 'list' prop
  console.log(list);
  return (
    <div className="menu-items-container">
      <div className="menu-items-scrollable">
        <MenuItem parent={"location"} menuItems={list} />
      </div>
    </div>
  );
};

export default ListPage;
