import React from "react";
import "../App.css";

const MenuItem = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((menuItem) => (
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

                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-price">{menuItem.price}</p>

                  {/* <div className="btn-add">
                    <button onClick={() => incrementCount(menuItem.id, menuItem.price)} type="button" className="btn">+</button>
                  </div>
                  {counts[menuItem.id]} {/* Display count for the current menu item */}
                  {/* <div className="btn-add">
                    <button onClick={() => decrementCount(menuItem.id, menuItem.price)} type="button" className="btn">-</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
