import React from 'react';

const ListComponent = ({name}) => {


  return (
    <div style={{ padding: 20, margin: 10, backgroundColor: "#ffffff", cursor: "pointer", border: "2px solid black", borderRadius: "15px"}}>
      {name}
    </div>
  );
};

export default ListComponent;
