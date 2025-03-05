import React from "react";
import Layout from "../layout";
import { CaretRight } from "@phosphor-icons/react";
import { PencilSimple } from "@phosphor-icons/react";

const ProductsPage = () => {
  const products = [
    { name: "Biscoff Cheesecake", id: "#0001", type: "Cookies", price: "P 00" },
    { name: "Funfetti", id: "#0002", type: "Cookies", price: "P 00" },
    {
      name: "Matcha with Cream Cheese",
      id: "#0003",
      type: "Cookies",
      price: "P 00",
    },
    { name: "Nutella Blast", id: "#0004", type: "Cookies", price: "P 00" },
    { name: "Oreo Cheesecake", id: "#0005", type: "Cookies", price: "P 00" },
    { name: "Rocky Road", id: "#0006", type: "Cookies", price: "P 00" },
    { name: "Smores 2.0", id: "#0007", type: "Cookies", price: "P 00" },
    { name: "Special Crinkles", id: "#0008", type: "Cookies", price: "P 00" },
    { name: "Brownies", id: "#0009", type: "Bars", price: "P 00" },
  ];
  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex justify-between items-center px-10">
          <h1 className="text-blueSerenity py-5">Products</h1>
          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
              Create new Product
              <CaretRight size={20} />
            </button>
          </div>
        </div>

        <div className="px-10 max-h-full h-full overflow-x-auto gap-3 flex flex-col">
          <div className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-7 items-center">
            <div className="w-fit">
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <span className="font-semibold text-darkGray text-left">Name</span>
            <span className="font-semibold text-darkGray text-left">
              Product ID
            </span>
            <span className="font-semibold text-darkGray text-left">Type</span>
            <span className="font-semibold text-darkGray text-left">Price</span>
            <span className="font-semibold text-darkGray text-left">Image</span>
            <span></span>
          </div>

          <div className="flex flex-col overflow-y-scroll gap-3">
            {products.map((item, index) => (
              <div
                className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-7 items-center"
                key={index}
              >
                <input type="checkbox" className="w-4 h-4" />
                <span>{item.name}</span>
                <span>{item.id}</span>
                <span>{item.type}</span>
                <span>{item.price}</span>
                <div className="w-[3.75rem] 10 h-[3.75rem] p-5 rounded-lg bg-darkerGray"></div>
                <PencilSimple size={32} />
              </div>
            ))}
          </div>
          <div className="flex items-center w-full gap-3">
            <div className="bg-blueSerenity border border-blueSerenity  w-[3rem] h-[3rem] items-center justify-center flex rounded-lg hover:cursor-pointer">
              <span className="text-white">1</span>
            </div>

            <div className="bg-white border border-blueSerenity  w-[3rem] h-[3rem] items-center justify-center flex rounded-lg hover:cursor-pointer">
              <span className="text-darkerGray">2</span>
            </div>

            <div className="bg-white border border-blueSerenity  w-[3rem] h-[3rem] items-center justify-center flex rounded-lg hover:cursor-pointer">
              <span className="text-darkerGray">3</span>
            </div>
          </div>
          {/* <div className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-7 items-center">
            <input type="checkbox" className="w-4 h-4" />
            <span>Biscoff Cheesecake</span>
            <span>#0001</span>
            <span>Cookies</span>
            <span>P 0.00</span>
            <div className="w-10 h-10 p-5 rounded-lg bg-darkerGray"></div>
            <span>edit</span>
          </div>

          <div className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-7 items-center">
            <input type="checkbox" className="w-4 h-4" />
            <span>Biscoff Cheesecake</span>
            <span>#0001</span>
            <span>Cookies</span>
            <span>P 0.00</span>
            <div className="w-10 h-10 p-5 rounded-lg bg-darkerGray"></div>
            <span>edit</span>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
