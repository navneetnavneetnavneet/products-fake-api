import React from "react";

const Details = () => {
  return (
    <div className="w-[70%] h-screen mx-auto p-[10%] flex gap-x-10">
      <div className="overflow-hidden w-[50%] h-[50vh]">
        <img
          className="h-full bg-center"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div className="content h-[50vh] flex flex-col justify-center">
        <h1 className="text-3xl font-semibold">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        </h1>
        <h2 className="text-xl text-zinc-400 my-3">men's clothing</h2>
        <h3 className="text-xl font-semibold text-red-200">$ 109.95</h3>
        <p className="mt-3 mb-10">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="flex gap-x-10">
        <button className="px-6 py-2 border rounded-md border-blue-200 text-blue-200">
          Edit
        </button>
        <button className="px-6 py-2 border rounded-md border-red-200 text-red-200">
          Delete
        </button>

        </div>
      </div>
    </div>
  );
};

export default Details;
