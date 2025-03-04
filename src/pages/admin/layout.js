import React from "react";
import Sidebar from "../../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <main className="px-20 py-10 bg-white flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
