import React from "react";

const ItemDesc = ({ name, desc }) => {
  return (
    <div className="bg-amber-500 ">
      <p>name: {name}</p>
      <p>Desc: {desc}</p>
    </div>
  );
};

export default ItemDesc;
