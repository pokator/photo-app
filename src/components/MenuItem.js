import React, { useState } from 'react';
import '../App.css';




const MenuItem = ({ menuItems }) => {
//   // Initialize counts as an object with menu item IDs as keys
//   const initialCounts = menuItems.reduce((acc, menuItem) => {
//     acc[menuItem.id] = 0;
//     return acc;
//   }, {});

//   // State to hold counts for each menu item
//   const [counts, setCounts] = useState(initialCounts);
//   // State to hold subtotal
//   const [subtotal, setSubtotal] = useState(0);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');

//   const incrementCount = (itemId, price) => {
//     setCounts((prevCounts) => {
//       const newCounts = { ...prevCounts, [itemId]: prevCounts[itemId] + 1 };
//       return newCounts;
//     });
//     setSubtotal((prevSubtotal) => prevSubtotal + price); // Update subtotal
//   };
  
//   const decrementCount = (itemId, price) => {
//     if (counts[itemId] > 0) {
//       setCounts((prevCounts) => {
//         const newCounts = { ...prevCounts, [itemId]: prevCounts[itemId] - 1 };
//         return newCounts;
//       });
//       setSubtotal((prevSubtotal) => prevSubtotal - price); // Update subtotal
//     }
//   };

//   const clearAll = () => {
//     setCounts(initialCounts);
//     setSubtotal(0);
//   };

//   const handleOrder = () => {
//     if (subtotal === 0) {
//       alert("No items in cart.");
//     } else {
//       const orderedItems = menuItems
//         .filter(menuItem => counts[menuItem.id] > 0)
//         .map(menuItem => `${counts[menuItem.id]} ${menuItem.title}`)
//         .join(", ");
//       alert(`Order Placed!: ${orderedItems}`);
//     }
//   };



  return (
    <>
      {menuItems.map((menuItem) => (
        <div className="row" key={menuItem.id}>
          <div className="col-5">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <img src={`images/${menuItem.imageName}`} style={{ width: '90%', height: 'auto' }} className="image" alt={`Photo of ${menuItem.imageName}`} />
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
