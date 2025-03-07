import React, { useState } from "react";
import Layout from "../layout";
import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";

const SalesTrackingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sales = [
    {
      id: 1,
      productID: 101,
      productName: "Laptop",
      price: 50000,
      totalSales: 10,
      totalIncome: 500000,
    },
    {
      id: 2,
      productID: 102,
      productName: "Smartphone",
      price: 20000,
      totalSales: 25,
      totalIncome: 500000,
    },
    {
      id: 3,
      productID: 103,
      productName: "Tablet",
      price: 15000,
      totalSales: 18,
      totalIncome: 270000,
    },
    {
      id: 4,
      productID: 104,
      productName: "Smartwatch",
      price: 8000,
      totalSales: 30,
      totalIncome: 240000,
    },
    {
      id: 5,
      productID: 105,
      productName: "Wireless Headphones",
      price: 5000,
      totalSales: 40,
      totalIncome: 200000,
    },
    {
      id: 6,
      productID: 106,
      productName: "Gaming Mouse",
      price: 2500,
      totalSales: 55,
      totalIncome: 137500,
    },
    {
      id: 7,
      productID: 107,
      productName: "Mechanical Keyboard",
      price: 4500,
      totalSales: 35,
      totalIncome: 157500,
    },
    {
      id: 8,
      productID: 108,
      productName: "Monitor",
      price: 12000,
      totalSales: 22,
      totalIncome: 264000,
    },
    {
      id: 9,
      productID: 109,
      productName: "External Hard Drive",
      price: 7000,
      totalSales: 28,
      totalIncome: 196000,
    },
    {
      id: 10,
      productID: 110,
      productName: "Printer",
      price: 10000,
      totalSales: 15,
      totalIncome: 150000,
    },
    {
      id: 11,
      productID: 111,
      productName: "Router",
      price: 3500,
      totalSales: 60,
      totalIncome: 210000,
    },
    {
      id: 12,
      productID: 112,
      productName: "Webcam",
      price: 3000,
      totalSales: 45,
      totalIncome: 135000,
    },
    {
      id: 13,
      productID: 113,
      productName: "Microphone",
      price: 4000,
      totalSales: 50,
      totalIncome: 200000,
    },
    {
      id: 14,
      productID: 114,
      productName: "Portable Speaker",
      price: 6000,
      totalSales: 32,
      totalIncome: 192000,
    },
    {
      id: 15,
      productID: 115,
      productName: "VR Headset",
      price: 25000,
      totalSales: 8,
      totalIncome: 200000,
    },
    {
      id: 16,
      productID: 116,
      productName: "Smart TV",
      price: 45000,
      totalSales: 6,
      totalIncome: 270000,
    },
    {
      id: 17,
      productID: 117,
      productName: "Projector",
      price: 15000,
      totalSales: 12,
      totalIncome: 180000,
    },
    {
      id: 18,
      productID: 118,
      productName: "Gaming Console",
      price: 35000,
      totalSales: 9,
      totalIncome: 315000,
    },
    {
      id: 19,
      productID: 119,
      productName: "Power Bank",
      price: 2000,
      totalSales: 80,
      totalIncome: 160000,
    },
    {
      id: 20,
      productID: 120,
      productName: "Graphics Card",
      price: 60000,
      totalSales: 5,
      totalIncome: 300000,
    },
  ];
  const filteredSales = sales.filter(
    (sale) =>
      sale.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.id.toString().includes(searchQuery)
  );
  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex items-center gap-3">
          <h1 className="text-blueSerenity py-5">Sales Tracking</h1>
        </div>

        <div className="flex items-center w-full justify-between">
          <div className="flex items-center relative">
            <input
              className=" text-left pl-14"
              placeholder="Search by name or product number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlass size={32} className="absolute ml-3" />
          </div>

          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-blueSerenity text-white px-4 rounded-lg shadow-md hover:scale-110 transition-all duration-300 w-fit">
              Create new Product
              <CaretRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full h-full overflow-y-scroll flex flex-col gap-3">
          <div className=" w-full rounded-lg p-5 grid grid-cols-6 items-center">
            <span className="font-semibold text-darkGray text-left">
              Product ID
            </span>
            <span className="font-semibold text-darkGray text-left">
              Product Name
            </span>
            <span className="font-semibold text-darkGray text-left">Price</span>
            <span className="font-semibold text-darkGray text-left">
              Total Sales
            </span>
            <span className="font-semibold text-darkGray text-left">
              Total Income
            </span>
            <span></span>
          </div>

          <div className="w-full h-full overflow-y-scroll flex flex-col gap-3">
            {filteredSales.length > 0 ? (
              filteredSales.map((sale) => (
                <div
                  key={sale.id}
                  className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-6 items-center"
                >
                  <span className="text-darkGray">#{sale.id}</span>
                  <span>{sale.productName}</span>
                  <span>P {sale.price.toFixed(2)}</span>
                  <span>{sale.totalSales}</span>
                  <span>P {sale.totalIncome.toFixed(2)}</span>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-5">
                No matching results found.
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesTrackingPage;
