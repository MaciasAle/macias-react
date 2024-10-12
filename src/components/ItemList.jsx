import React, { useEffect, useState } from "react";
// import Item from "./Item";

const ItemList = ({ product }) => {
  return (
    <div>
      {product.length > 0 &&
        product.map((prod) => {
          return <Item key={prod.id} product={prod} />;
        })}
    </div>
  );
};

export default ItemList;
