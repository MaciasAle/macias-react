import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return <h1>Vite + React</h1>;
  <div className="App">
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
  </div>;
}

export default App;
