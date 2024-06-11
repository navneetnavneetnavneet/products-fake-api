import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContext>
);
