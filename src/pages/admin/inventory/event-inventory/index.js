import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import {
  CaretLeft,
  MagnifyingGlass,
  PencilSimple,
} from "@phosphor-icons/react";

const EventInventoryPage = () => {
  const [stockToggle, setStockToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [stockInData, setStockInData] = useState([]);
  const [stockOutData, setStockOutData] = useState([]);
  const [eventDetails, setEventDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const apiUrl = "http://localhost:5000/api/stockin";
    const stockOutUrl = "http://localhost:5000/api/stockout";
    const eventDetailsUrl = "http://localhost:5000/api/eventdetails";

    console.log(`Fetching data from: ${apiUrl}`);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched stock-in data:", data);
        setStockInData(data);
      })
      .catch((error) => console.error("Error fetching stock-in data:", error));

    fetch(stockOutUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched stock-out data:", data);
        setStockOutData(data);
      })
      .catch((error) => console.error("Error fetching stock-out data:", error));

    fetch(eventDetailsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched event details:", data);
        setEventDetails(data[0]); // Assuming you want the first event details
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredStocks = stockInData.filter(
    (item) =>
      item?.ProductName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.StockID?.toString().includes(searchQuery)
  );

  const filteredStockOuts = stockOutData.filter((item) =>
    item?.ProductName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex items-center gap-3">
          <div
            className="bg-lightGray p-1 rounded-full hover:scale-110 transition-all duration-150 hover:cursor-pointer"
            onClick={() => navigate("/admin/inventory")}
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
              <span className="text-darkGray">{eventDetails.EventTitle}</span>
            </div>

            <div className="w-full grid grid-cols-2">
              <span className="font-semibold text-darkerGray text-lg">
                Staff Assigned
              </span>
              <span className="text-darkGray">
                {eventDetails.StaffAssigned}
              </span>
            </div>
          </div>

          <div className="w-full grid gap-3">
            <div className="w-full grid grid-cols-2">
              <span className="font-semibold text-darkerGray text-lg">
                Schedule ID
              </span>
              <span className="text-darkGray">#{eventDetails.ScheduleID}</span>
            </div>

            <div className="w-full grid grid-cols-2">
              <span className="font-semibold text-darkerGray text-lg">
                Date start
              </span>
              <span className="text-darkGray">
                {new Date(eventDetails.ScheduleStartDate).toLocaleDateString()}
              </span>
            </div>
            <div className="w-full grid grid-cols-2 grid-row-">
              <span className="font-semibold text-darkerGray text-lg">
                Date end
              </span>
              <span className="text-darkGray">
                {new Date(eventDetails.ScheduleEndDate).toLocaleDateString()}
              </span>
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
            {!stockToggle ? (
              filteredStocks.length > 0 ? (
                filteredStocks.map((item, index) => (
                  <div
                    key={item.StockID}
                    className={`w-full flex items-center justify-between p-5 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <div className="w-full grid grid-cols-6 text-lg text-darkerGray">
                      <span>{item.ProductName}</span>
                      <span>{item.Quantity}</span>
                      <span>{item.Quantity}</span>
                      <span>
                        {new Date(item.ExpiryDate).toLocaleDateString()}
                      </span>{" "}
                      {/* Format ExpiryDate */}
                      <span>₱{parseFloat(item.Price).toFixed(2)}</span>{" "}
                      {/* Ensure Price is a number */}
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
              )
            ) : filteredStockOuts.length > 0 ? (
              filteredStockOuts.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex items-center justify-between p-5 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <div className="w-full grid grid-cols-6 text-lg text-darkerGray">
                    <span>{item.ProductName}</span>
                    <span>{item.NumberOfStocks}</span>
                    <span>{item.AvailableStocks}</span>
                    <span>
                      {new Date(item.ExpiryDate).toLocaleDateString()}
                    </span>{" "}
                    {/* Format ExpiryDate */}
                    <span>₱{parseFloat(item.Price).toFixed(2)}</span>{" "}
                    {/* Ensure Price is a number */}
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
