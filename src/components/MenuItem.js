import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ menuItems, parent }) => {
  const navigate = useNavigate();
  console.log(menuItems);

  const handleCardClick = (menuItem) => {
    // Navigate to the ListPage with the list name as a URL parameter
    navigate(`/location/${menuItem.title}`);
  };

  return (
    <>
      {menuItems && menuItems.map((menuItem) => (
          <div className="row" key={menuItem.id} onClick={() => handleCardClick(menuItem)}>
            <div className="col-5">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src={`images/${menuItem.images[0]}`}
                  style={{ width: "90%", height: "auto" }}
                  className="image"
                  alt={`Photo of ${menuItem.images[0]}`}
                />
              </div>
            </div>

            <div className="col-7">
              <div className="card-body d-flex flex-column align-items-left justify-content-left">
                <div>
                  <h5 className="card-title">{menuItem.title}</h5>
                  <p className="card-text">{menuItem.description}</p>
                </div>
              </div>
            </div>
          </div>
      ))}
    </>
  );
};

export default MenuItem;
