// import React from "react";
// import { FaShoppingCart } from "react-icons/fa"; // Utilizamos un ícono de react-icons para el carrito
// // import "./CartWidget.css"; // Estilos personalizados para el widget del carrito

// const CartWidget = () => {
//   return (
//     <div className="cart-widget">
//       <FaShoppingCart size={24} />
//       <span className="cart-count">3</span> {/* Número hardcodeado */}
//     </div>
//   );
// };

// export default CartWidget;

import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="cart">
      <Link to={"/cart"}>
        <FaCartShopping />
      </Link>
    </div>
  );
}

export default CartWidget;
