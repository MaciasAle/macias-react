// import React from "react";
// // import "./ItemListContainer.css"; // Estilos personalizados para el contenedor

// const ItemListContainer = ({ greeting }) => {
//   return (
//     <div className="item-list-container">
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// export default ItemListContainer;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [product, setProducts] = useState([]);
  const { category } = useParams();
  var productsFiltered = [];

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  }, []);

  switch (category) {
    case "categoriaA":
      productsFiltered = product.filter(
        (item) => item.category === "categoriaA"
      );
      break;
    case "categoriaB":
      productsFiltered = product.filter(
        (item) => item.category === "categoriaB"
      );
      break;
    case "categoriaC":
      productsFiltered = product.filter(
        (item) => item.category === "categoriaC"
      );
      break;
    case "categoriaD":
      productsFiltered = product.filter(
        (item) => item.category === "categoriaD"
      );
      break;
    default:
      productsFiltered = product;
  }

  return (
    <div>
      <ItemList product={productsFiltered} />
    </div>
  );
};

export default ItemListContainer;
