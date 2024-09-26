import React from "react";
import "./ItemListContainer.css"; // Estilos personalizados para el contenedor

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;