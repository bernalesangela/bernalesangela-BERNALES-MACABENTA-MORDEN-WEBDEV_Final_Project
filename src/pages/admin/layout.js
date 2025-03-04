import React from "react";
import Sidebar from "../../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className={`flex h-screen `}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 px-20 py-10 bg-white">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
