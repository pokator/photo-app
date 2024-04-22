import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";

const ListPage = () => {
  const [listItems, setListItems] = useState([]);
  const { list } = useParams();

  useEffect(() => {
    console.log("List parameter from URL:", list);
    const storedLists = JSON.parse(localStorage.getItem("lists")) || {};
    console.log("Stored lists:", storedLists);
    const listArray = storedLists[list] || [];
    console.log("List items from localStorage:", listArray);
    setListItems(listArray);
  }, [list]);

  useEffect(() => {
    console.log("Updated listItems:", listItems);
  }, [listItems]);

  console.log("Rendering ListPage with listItems:", listItems);

  const deleteItem = (itemId) => {
    const updatedList = listItems.filter(item => item.id !== itemId);
    setListItems(updatedList);
    const storedLists = JSON.parse(localStorage.getItem("lists")) || {};
    storedLists[list] = updatedList;
    localStorage.setItem("lists", JSON.stringify(storedLists));
  };

  return (
    <div className="menu-items-container">
      <div className="menu-items-scrollable">
        <MenuItem parent={"location"} menuItems={listItems} showDeleteButton={true} onDelete={deleteItem}/>
      </div>
    </div>
  );
};

export default ListPage;
