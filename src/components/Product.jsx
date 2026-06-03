import React from "react";
import ItemDesc from "./ItemDesc";

const Product = ({ name, desc, price }) => {
  return (
    <div className="rounded-2xl p-8  bg-red-400">
      <ItemDesc name={name} desc={desc} />
      <h3 className="bg-blue-500">price: {price}</h3>
    </div>
  );
};

export default Product;
