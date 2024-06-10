import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav"

const Home = () => {
  return (
    <>
    <Nav />

    <div className="w-[85%] h-screen p-[5%] flex gap-x-10 gap-y-10 flex-wrap">
      <Link
        to="/details/1"
        className="card w-[17%] h-[50%] border shadow-md flex flex-col items-center py-5 overflow-hidden"
      >
        <div className="w-full h-[80%]">
          <img
            className="w-full h-full object-contain hover:scale-110 duration-300"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <h1 className="mt-5 text-lg font-medium hover:text-blue-200">
          Lorem ipsum dolor sit.
        </h1>
      </Link>
      <Link
        to="/details/1"
        className="card w-[17%] h-[50%] border shadow-md flex flex-col items-center py-5"
      >
        <div className="w-full h-[80%]">
          <img
            className="w-full h-full object-contain hover:scale-110 duration-300"
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            alt=""
          />
        </div>
        <h1 className="mt-5 text-lg font-medium hover:text-blue-200">
          Lorem ipsum dolor sit.
        </h1>
      </Link>
    </div>
    </>
  );
};

export default Home;
