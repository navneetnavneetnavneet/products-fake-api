import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { productcontext } from "../contexts/ProductContext";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(productcontext);

  return (
    <>
      <Nav />

      <div className="w-[85%] h-screen p-[5%] flex gap-x-10 gap-y-10 flex-wrap overflow-x-hidden overflow-y-auto">
        {products ? (
          products.map((product) => (
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
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
