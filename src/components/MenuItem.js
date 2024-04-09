import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

const MenuItem = ({ menuItems, parent }) => {
  console.log(menuItems);

  return (
    <>
      {menuItems.map((menuItem) => (
        <Link to={`/${parent}/${menuItem.id}`} key={menuItem.id}>
          <div className="row" key={menuItem.id}>
            <div className="col-5">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src={`images/${menuItem.imageName}`}
                  style={{ width: "90%", height: "auto" }}
                  className="image"
                  alt={`Photo of ${menuItem.imageName}`}
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
        </Link>
      ))}
    </>
  );
};

export default MenuItem;
