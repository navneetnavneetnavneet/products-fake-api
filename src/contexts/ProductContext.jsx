import React, { createContext, useState } from "react";

export const productcontext = createContext(null);

const ProductContext = (props) => {
  const [products, setProducts] = useState(null);

  return (
    <productcontext.Provider value={[products, setProducts]}>
      {props.children}
    </productcontext.Provider>
  );
};

export default ProductContext;
