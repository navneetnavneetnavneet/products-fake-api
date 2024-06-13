import React, { createContext, useState, useEffect } from "react";
import axios from "../utils/axios";

export const productcontext = createContext(null);

const ProductContext = (props) => {
  const [products, setproducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productcontext.Provider value={[products, setproducts]}>
      {props.children}
    </productcontext.Provider>
  );
};

export default ProductContext;
