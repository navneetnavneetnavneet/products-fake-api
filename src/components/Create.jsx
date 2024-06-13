import { useState } from "react";

const Create = () => {
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const product = { image, title, category, price, description };
    console.log(product);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full h-screen flex flex-col items-center p-[5%] mx-auto"
    >
      <h1 className="w-1/2 text-3xl font-semibold mb-5">Add New Product</h1>
      <input
        type="text"
        placeholder="Image URl"
        className="w-1/2 bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="w-1/2 bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="w-[49%] bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-[49%] bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        type="text"
        rows="3"
        placeholder="Product Description Here..."
        className="w-1/2 resize-none bg-zinc-100 px-4 py-2 rounded-md text-xl mb-5"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="px-4 py-2 border rounded-md border-blue-300 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
