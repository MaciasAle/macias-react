import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import NavBar from "./components/NavBar.jsx";
// import ItemListContainer from "./components/ItemListContainer.jsx";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);

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
  <div className="App">
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
  </div>;
}

export default App;
