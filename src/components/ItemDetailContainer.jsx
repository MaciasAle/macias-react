import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Aquí puedes realizar la lógica para obtener el producto por ID (puedes simularlo por ahora)
    const fetchItem = async () => {
      // Simular datos de producto
      const fetchedItem = {
        id,
        name: "Zapatilla Deportiva",
        description: "Una excelente zapatilla para correr.",
        price: 59.99,
      };
      setItem(fetchedItem);
    };

    fetchItem();
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
