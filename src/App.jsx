import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import axios from "./utils/axios";
import { productcontext } from "./contexts/ProductContext";
import NotFound from "./components/NotFound";

const App = () => {
  const [products, setProducts] = useContext(productcontext);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
