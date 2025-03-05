import React from "react";
import Layout from "../../layout";
import { CaretLeft } from "@phosphor-icons/react";
import { UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";

const NewProduct = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "");
  };
  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex items-center gap-3">
          <div className="bg-lightGray p-1 rounded-full hover:scale-110 transition-all duration-150 hover:cursor-pointer">
            <CaretLeft size={25} />
          </div>
          <h1 className="text-blueSerenity py-5">Create New Product</h1>
        </div>

        <h2 className="text-darkerGray">Product Details</h2>
        <div className="bg-solidWhite flex rounded-lg shadow-lg p-10  h-full flex-col gap-5 last:justify-end">
          <div className="w-full flex flex-col gap-1">
            <label>Product Name</label>
            <input
              placeholder="Enter characters"
              className="w-full text-left pl-3"
            />
          </div>

          <div className="w-full flex flex-col">
            <label>Category</label>
            <input
              placeholder="Enter characters"
              className="w-full text-left pl-3"
            />
          </div>

          <div className="w-full flex flex-col">
            <label>Product Price</label>
            <input
              placeholder="Enter characters"
              className="w-full text-left pl-3"
            />
          </div>

          <div className="w-full flex flex-col items-center border-2 border-dashed border-gray-400 p-5 rounded-lg cursor-pointer h-full">
            <label
              htmlFor="file-upload"
              className="w-full h-[20rem] flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 transition"
            >
              <UploadSimple size={32} className="mb-2" />
              {fileName ? fileName : "Drag your file here or click to upload"}
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="w-full justify-end flex h-full mt-auto">
            <button className="self-end">Submit</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewProduct;
