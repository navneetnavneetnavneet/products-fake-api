import React, { useContext, useEffect, useState } from "react";
import { productcontext } from "../contexts/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const [products, setproducts] = useContext(productcontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setproduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const editProductHandler = (e) => {
    e.preventDefault();

    if (
      product.image.trim().length < 5 ||
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("each and every input filed atleast 4 characters!");
      return;
    }

    const pIndex = products.findIndex((p) => p.id == id);
    const copyProducts = [...products];
    copyProducts[pIndex] = { ...products[pIndex], ...product };

    setproducts(copyProducts);
    localStorage.setItem("products", JSON.stringify(copyProducts));
    toast.success("Product Update Successfully");
    navigate(-1);
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  return (
    <form
      onSubmit={editProductHandler}
      className="w-full h-screen flex flex-col items-center p-[5%] mx-auto"
    >
      <h1 className="w-1/2 text-3xl font-semibold mb-5">Edit Product</h1>
      <input
        type="text"
        placeholder="Image URl"
        className="w-1/2 bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="Title"
        className="w-1/2 bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="w-[49%] bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-[49%] bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        type="text"
        rows="3"
        placeholder="Product Description Here..."
        className="w-1/2 resize-none bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
      ></textarea>
      <div className="w-1/2">
        <button className="px-4 py-2 border rounded-md border-blue-300 text-blue-300">
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
