import React from "react";
import "../styles/navbar.scss";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>E-Commerce</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/carrito">Carrito</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
