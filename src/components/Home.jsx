import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import { productcontext } from "../contexts/ProductContext";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(productcontext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredroducts, setfilteredproducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredroducts) setfilteredproducts(products);
    if (filteredroducts != "undefined") getProductCategory();
  }, [category, products]);

  console.log(filteredroducts);

  
  return products ? (
    <>
      <Nav />

      <div className="w-[85%] h-screen p-[5%] flex gap-x-10 gap-y-10 flex-wrap overflow-x-hidden overflow-y-auto">
        
        {filteredroducts &&
          filteredroducts.map((product) => (
            <Link
              key={product.id}
              to={`/details/${product.id}`}
              className="card w-[17%] h-[50%] border shadow-md flex flex-col items-center py-5 overflow-hidden"
            >
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-contain hover:scale-110 duration-300"
                  src={product.image}
                  alt=""
                />
              </div>
              <h1 className="mt-5 text-lg font-medium hover:text-blue-200">
                {product.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
