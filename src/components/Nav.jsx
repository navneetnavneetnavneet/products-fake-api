import React, { useContext } from "react";
import { productcontext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(productcontext);

  let uniqueCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  uniqueCategory = [...new Set(uniqueCategory)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.3)`;
  };


  return (
    <nav className="w-[15%] h-screen bg-zinc-100 flex flex-col items-center pt-10">
      <button className="px-4 py-2 border rounded-md border-blue-200 text-blue-200">
        Add New Product
      </button>
      <hr className="w-[80%] my-5" />
      <h1 className="text-2xl font-semibold w-[80%] mb-2">Category Filter</h1>
      <div className="w-[80%]">
        {uniqueCategory.map((category, index) => (
          <Link to={`/?category=${category}`} key={index} className="text-lg mb-2 flex items-center gap-x-2">
            <span
              style={{ backgroundColor: color() }}
              className="inline-block w-4 h-4 rounded-full"
            ></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
