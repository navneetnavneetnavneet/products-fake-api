import React from "react";

const Nav = () => {
  return (
    <nav className="w-[15%] h-screen bg-zinc-100 flex flex-col items-center pt-10">
      <button className="px-4 py-2 border rounded-md border-blue-200 text-blue-200">
        Add New Product
      </button>
      <hr className="w-[80%] my-5" />
      <h1 className="text-2xl font-semibold w-[80%] mb-2">Category Filter</h1>
      <ul className="w-[80%]">
        <li className="text-lg mb-2 flex items-center gap-x-2">
          <span className="inline-block w-4 h-4 rounded-full bg-red-200"></span>
          cat 1
        </li>
        <li className="text-lg mb-2 flex items-center gap-x-2">
          <span className="inline-block w-4 h-4 rounded-full bg-blue-200"></span>
          cat 1
        </li>
        <li className="text-lg mb-2 flex items-center gap-x-2">
          <span className="inline-block w-4 h-4 rounded-full bg-green-200"></span>
          cat 1
        </li>
        <li className="text-lg mb-2 flex items-center gap-x-2">
          <span className="inline-block w-4 h-4 rounded-full bg-yellow-200"></span>
          cat 1
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
