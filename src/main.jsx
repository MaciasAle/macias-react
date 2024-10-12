// import React from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjzCB5_Jhwk0r1K148xaEegtnUpjRPcEM",
  authDomain: "proyecto-final-1edf3.firebaseapp.com",
  projectId: "proyecto-final-1edf3",
  storageBucket: "proyecto-final-1edf3.appspot.com",
  messagingSenderId: "716346890107",
  appId: "1:716346890107:web:0d06e1ce8cac368fe90fde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
