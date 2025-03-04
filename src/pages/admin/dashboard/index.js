import React from "react";
import Layout from "../layout"; // Import Layout
// import { SalesSummary } from "./components/salesSummary";
import SalesSummary from "./components/salesSummary";
import StockReport from "./components/stockReport";
import SalesOrder from "./components/salesOrder";

const Dashboard = () => {
  return (
    <Layout>
      <section className="h-full">
        <h1 className="text-blueSerenity py-5">Hello, Angela</h1>
        {/* <p className="text-gray-700">Manage your application from here.</p> */}

        <div className="gap-10 flex flex-col h-full">
          <SalesSummary />
          <div className="flex w-full gap-10 h-full">
            <div className="flex flex-col w-full gap-10">
              {/* <StockReport /> */}
              <SalesOrder />
              <SalesOrder />
            </div>

            {/* Empty container - stretches to full height */}
            <div className="p-10 bg-solidWhite rounded-lg shadow-lg w-4/12 ">
              <label>an empty container</label>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
