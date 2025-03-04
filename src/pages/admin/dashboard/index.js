import React from "react";
import Layout from "../layout"; // Import Layout
import { SalesSummary } from "./components/salesSummary";

const Dashboard = () => {
  return (
    <Layout>
      <section>
        <h1 className="text-blueSerenity py-5">Hello, Angela</h1>
        {/* <p className="text-gray-700">Manage your application from here.</p> */}

        <div>
          <SalesSummary />
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
