// import axios from "../utils/axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { productcontext } from "../contexts/ProductContext";

const Details = () => {
  const [products, setproducts] = useContext(productcontext);
  const { id } = useParams();
  const [product, setproduct] = useState(null);

  // const singleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // singleProduct();
  }, []);

  return product ? (
    <div className="w-[70%] h-screen mx-auto p-[10%] flex gap-x-10">
      <div className="w-[40%] h-[50vh]">
        <img className="h-full w-full  object-contain" src={product.image} alt="" />
      </div>
      <div className="content w-[60%] h-[50vh] flex flex-col justify-center">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <h2 className="text-xl text-zinc-400 my-3">{product.category}</h2>
        <h3 className="text-xl font-semibold text-red-200">
          $ {product.price}
        </h3>
        <p className="mt-3 mb-10">{product.description}</p>
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
  ) : (
    <Loading />
  );
};

export default Details;
