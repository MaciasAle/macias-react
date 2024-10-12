// import React from "react";

// const Cart = () => {
//   return (
//     <div>
//       <h1>Carrito</h1>
//       <p>Tu carrito está vacío.</p>
//     </div>
//   );
// };

// export default Cart;

// import React from "react";

// const Cart = () => {
//   // Aquí podrías añadir lógica de estado para gestionar el carrito
//   const itemsInCart = []; // Lista simulada de productos en el carrito

//   return (
//     <div className="cart">
//       <h1>Carrito de Compras</h1>
//       {itemsInCart.length > 0 ? (
//         <ul>
//           {itemsInCart.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No tienes productos en tu carrito.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useState } from "react";
import { ItemContext } from "../context/CartContext";
import { CartCard } from "./CartCard";
import { Text } from "@chakra-ui/react";
import { addDoc, getFirestore, collection } from "firebase/firestore";

function Cart() {
  const [cart, setCart] = useContext(ItemContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const ordersCollection = collection(db, "orden");

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const order = {
    cliente: { nombre, email },
    items: cart,
    total: totalPrice,
  };

  if (quantity > 0) {
    return (
      <div>
        {cart.map((item) => {
          return (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
            />
          );
        })}
        <div>Productos en carrito: {quantity}</div>
        <div>Precio total: $ {totalPrice}</div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button type="submit"> Comprar !</button>
          </form>
          <p>{orderId}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Text>No hay productos en el carrito</Text>
      </div>
    );
  }
}

export default Cart;
