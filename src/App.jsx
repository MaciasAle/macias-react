// import { useState } from "react";
// import "./App.css";
// import ItemListContainer from "./components/ItemListContainer.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar.jsx";
// import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
// import Contact from "./components/Contact.jsx";
// import Cart from "./components/Cart";

// function App() {
//   const [count, setCount] = useState(0);

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
//   <div className="App">
//     <NavBar />
//     <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
//   </div>;
// }

// export default App;

import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./components/Cart";
import { CartContext } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/catalogocompleto"
            element={<ItemListContainer />}
          />
          <Route exact path="/product/:id" element={<ItemDetail />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
