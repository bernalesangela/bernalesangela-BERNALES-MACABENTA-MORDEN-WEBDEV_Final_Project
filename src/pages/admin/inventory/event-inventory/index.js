import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "../../layout";
import {
  CaretLeft,
  MagnifyingGlass,
  PencilSimple,
} from "@phosphor-icons/react";

const EventInventoryPage = () => {
  const [stockToggle, setStockToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const stocks = {
    StockIn: [
      {
        id: 1,
        ProductName: "Biscoff Cheesecake",
        NumberOfStocks: 50,
        AvailabilityStocks: 45,
        ExpiryDate: "2025-12-01",
        Price: 450,
      },
      {
        id: 2,
        ProductName: "Funfetti Cake",
        NumberOfStocks: 30,
        AvailabilityStocks: 28,
        ExpiryDate: "2025-11-15",
        Price: 380,
      },
      {
        id: 3,
        ProductName: "Matcha with Cream Cheese",
        NumberOfStocks: 25,
        AvailabilityStocks: 22,
        ExpiryDate: "2025-10-30",
        Price: 420,
      },
      {
        id: 4,
        ProductName: "Nutella Blast",
        NumberOfStocks: 40,
        AvailabilityStocks: 35,
        ExpiryDate: "2025-12-10",
        Price: 400,
      },
      {
        id: 5,
        ProductName: "Oreo Cheesecake",
        NumberOfStocks: 35,
        AvailabilityStocks: 32,
        ExpiryDate: "2025-09-25",
        Price: 430,
      },
      {
        id: 6,
        ProductName: "Rocky Road Brownies",
        NumberOfStocks: 20,
        AvailabilityStocks: 18,
        ExpiryDate: "2025-11-20",
        Price: 300,
      },
      {
        id: 7,
        ProductName: "Smores 2.0",
        NumberOfStocks: 15,
        AvailabilityStocks: 12,
        ExpiryDate: "2025-08-15",
        Price: 280,
      },
      {
        id: 8,
        ProductName: "Special Crinkles",
        NumberOfStocks: 50,
        AvailabilityStocks: 50,
        ExpiryDate: "2025-12-05",
        Price: 250,
      },
      {
        id: 9,
        ProductName: "Butterscotch",
        NumberOfStocks: 60,
        AvailabilityStocks: 58,
        ExpiryDate: "2025-10-01",
        Price: 220,
      },
      {
        id: 10,
        ProductName: "Revel Bars",
        NumberOfStocks: 45,
        AvailabilityStocks: 43,
        ExpiryDate: "2025-09-30",
        Price: 350,
      },
    ],

    StockOut: [
      {
        id: 11,
        ProductName: "Red Velvet Cheesecake",
        NumberOfStocks: 25,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-11-10",
        Price: 480,
      },
      {
        id: 12,
        ProductName: "Ham and Cheese Empanada",
        NumberOfStocks: 30,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-10-05",
        Price: 150,
      },
      {
        id: 13,
        ProductName: "Small - Korean Cream Cheese Garlic Bread",
        NumberOfStocks: 40,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-09-15",
        Price: 120,
      },
      {
        id: 14,
        ProductName: "Medium - Korean Cream Cheese Garlic Bread",
        NumberOfStocks: 30,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-08-25",
        Price: 180,
      },
      {
        id: 15,
        ProductName: "Large - Korean Cream Cheese Garlic Bread",
        NumberOfStocks: 20,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-07-30",
        Price: 250,
      },
      {
        id: 16,
        ProductName: "Chocolate Chip Cookies",
        NumberOfStocks: 50,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-12-20",
        Price: 200,
      },
      {
        id: 17,
        ProductName: "Macarons",
        NumberOfStocks: 35,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-11-05",
        Price: 500,
      },
      {
        id: 18,
        ProductName: "Blueberry Cheesecake",
        NumberOfStocks: 20,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-10-10",
        Price: 450,
      },
      {
        id: 19,
        ProductName: "Chocolate Mousse",
        NumberOfStocks: 30,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-09-20",
        Price: 400,
      },
      {
        id: 20,
        ProductName: "Strawberry Shortcake",
        NumberOfStocks: 25,
        AvailabilityStocks: 0,
        ExpiryDate: "2025-08-05",
        Price: 420,
      },
    ],
  };

  //   const stockList = stockToggle ? stocks.StockOut : s  tocks.StockIn;

  const filteredStocks = (
    stockToggle ? stocks.StockOut : stocks.StockIn
  ).filter(
    (item) =>
      item.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toString().includes(searchQuery)
  );

  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex items-center gap-3">
          <div
            className="bg-lightGray p-1 rounded-full hover:scale-110 transition-all duration-150 hover:cursor-pointer"
            onClick={() => navigate('/admin/inventory')} // Add onClick handler
          >
            <CaretLeft size={25} />
          </div>
          <h1 className="text-blueSerenity py-5">Event Inventory</h1>
        </div>

        <div className="grid grid-cols-2 w-full gap-[20rem] mb-5">
          <div className="w-full grid gap-3">
            <div className="w-full grid grid-cols-2 ">
              <span className="font-semibold text-darkerGray text-lg">
                Event name
              </span>
              <span className="text-darkGray">Event name</span>
            </div>

            <div className="w-full grid grid-cols-2">
              <span className="font-semibold text-darkerGray text-lg">
                Staff Assigned
              </span>
              <span className="text-darkGray">Representative name</span>
            </div>
          </div>

          <div className="w-full grid gap-3">
            <div className="w-full grid grid-cols-2">
              <span className="font-semibold text-darkerGray text-lg">
                Schedule ID
              </span>
              <span className="text-darkGray">#000000</span>
            </div>

            <div className="w-full grid grid-cols-2">
              <span className="font-semibold text-darkerGray text-lg">
                Date start
              </span>
              <span className="text-darkGray">01/01/25</span>
            </div>
            <div className="w-full grid grid-cols-2 grid-row-">
              <span className="font-semibold text-darkerGray text-lg">
                Date end
              </span>
              <span className="text-darkGray">01/01/25</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full overflow-y-hidden">
          <div className="w-full bg-solidWhite flex items-center justify-between p-5 rounded-t-lg">
            <div className="w-[24rem] flex items-center justify-between mb-4">
              <span
                className={`font-semibold cursor-pointer pb-1 transition-all hover:scale-110 ${
                  !stockToggle
                    ? "border-b-2 border-blueSerenity scale-110"
                    : "text-gray-500"
                }`}
                onClick={() => setStockToggle(false)}
              >
                Stock In
              </span>

              <span
                className={`font-semibold cursor-pointer pb-1 transition-all hover:scale-110 ${
                  stockToggle
                    ? "border-b-2 border-blueSerenity scale-110"
                    : "text-gray-500"
                }`}
                onClick={() => setStockToggle(true)}
              >
                Stock Out
              </span>
            </div>

            <div className="flex items-center relative mb-4">
              <MagnifyingGlass size={24} className="absolute left-4" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-2 border border-lightGray rounded-md text-black placeholder-darkGray focus:outline-none focus:ring-2 focus:ring-blueSerenity text-left"
                placeholder="Search by name or product number"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full  flex items-center justify-between p-5 ">
            <div className="w-full grid grid-cols-6">
              <span className="font-semibold text-lg text-darkerGray">
                Product Name
              </span>
              <span className="font-semibold text-lg text-darkerGray">
                Number of Stocks
              </span>
              <span className="font-semibold text-lg text-darkerGray">
                Available Stocks
              </span>
              <span className="font-semibold text-lg text-darkerGray">
                Expiry Date
              </span>
              <span className="font-semibold text-lg text-darkerGray">
                Price
              </span>
            </div>
          </div>

          {/* Alternate Bg color starts */}
          <div className="w-full h-full overflow-y-scroll">
            {filteredStocks.length > 0 ? (
              filteredStocks.map((item, index) => (
                <div
                  key={item.id}
                  className={`w-full flex items-center justify-between p-5 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <div className="w-full grid grid-cols-6 text-lg text-darkerGray">
                    <span>{item.ProductName}</span>
                    <span>{item.NumberOfStocks}</span>
                    <span>{item.AvailabilityStocks}</span>
                    <span>{item.ExpiryDate}</span>
                    <span>₱{item.Price.toFixed(2)}</span>
                    <span>
                      <PencilSimple
                        size={24}
                        className="text-blue-500 cursor-pointer"
                      />
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-5 text-darkGray">
                No results found
              </div>
            )}
          </div>
          <div className="flex items-center w-full gap-3 py-5">
            <div className="bg-blueSerenity border border-blueSerenity  w-[3rem] h-[3rem] items-center justify-center flex rounded-lg hover:cursor-pointer">
              <span className="text-white">1</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventInventoryPage;
