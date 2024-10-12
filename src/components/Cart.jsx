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
import React from "react";

const Cart = () => {
  // Aquí podrías añadir lógica de estado para gestionar el carrito
  const itemsInCart = []; // Lista simulada de productos en el carrito

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {itemsInCart.length > 0 ? (
        <ul>
          {itemsInCart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes productos en tu carrito.</p>
      )}
    </div>
  );
};

export default Cart;
