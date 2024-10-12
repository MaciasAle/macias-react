// import React from "react";

// import "../styles/navbar.scss";

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>E-Commerce</h2>
//       </div>
//       <ul className="nav-links">
//         <li>
//           <a href="/">Inicio</a>
//         </li>
//         <li>
//           <a href="/productos">Productos</a>
//         </li>
//         <li>
//           <a href="/carrito">Carrito</a>
//         </li>
//         <li>
//           <a href="/contacto">Contacto</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { ItemContext } from "../context/CartContext";
import DropMenuCategory from "./DropMenuCategory";

const NavBar = () => {
  const [cart] = useContext(ItemContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="navbar">
      <DropMenuCategory />
      <Link to={"/"}>Home</Link>
      <Link to="/cart">
        <CartWidget /> {quantity}
      </Link>
    </div>
  );
};

export default NavBar;
