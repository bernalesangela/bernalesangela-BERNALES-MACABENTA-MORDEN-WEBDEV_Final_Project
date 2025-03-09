import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../pages/login/logo.svg";
import {
  ChartBar,
  Invoice,
  Package,
  UsersThree,
  CashRegister,
  ClockCounterClockwise,
  Cookie,
  Gear,
  Info,
  SignOut,
  List,
  X,
} from "@phosphor-icons/react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const fullName = localStorage.getItem("fullName") || "User";

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarContent = {
    main: {
      dashboard: {
        text: "Dashboard",
        redirect: "/admin/dashboard",
        icon: <ChartBar size={30} weight="light" />,
      },
      createOrder: {
        text: "Create Order",
        redirect: "/admin/create-order",
        icon: <Invoice size={30} weight="light" />,
      },
    },
    records: {
      products: {
        text: "Products",
        redirect: "/admin/products",
        icon: <Cookie size={30} weight="light" />,
      },
      inventory: {
        text: "Inventory",
        redirect: "/admin/inventory",
        icon: <Package size={30} weight="light" />,
      },
      salesTracking: {
        text: "Sales Tracking",
        redirect: "/admin/sales-tracking",
        icon: <CashRegister size={30} weight="light" />,
      },
      employees: {
        text: "Employees",
        redirect: "/admin/sales-tracking",
        icon: <UsersThree size={30} weight="light" />,
      },
    },
    controls: {
      // settings: {
      //   text: "Settings",
      //   redirect: "",
      //   icon: <Gear size={25} weight="light" />,
      // },
      about: {
        text: "About",
        redirect: "",
        icon: <Info size={25} weight="light" />,
      },
      logout: {
        text: "Logout",
        redirect: "",
        icon: <SignOut size={25} weight="light" />,
        action: handleLogout,
      },
    },
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-200 p-2 rounded-full shadow-md transition-transform duration-300 w-fit justify-between"
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>
      <section
        className={`bg-solidWhite py-10 flex flex-col w-[15.125rem] transition-all duration-500 ease-in-out  shadow-lg
      fixed top-0 left-0 z-40 h-screen max-h-screen overflow-hidden transform
      ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} 
      md:relative md:translate-x-0 md:opacity-100 md:w-[15.125rem] md:h-screen`}
      >
        <div className="flex flex-col justify-between">
          {/* Top Part */}
          <div className="flex flex-col">
            <img src={logo} alt="logo" />
            <span className="font-bold text-darkerGray p-3">General</span>

            {Object.entries(sidebarContent.main).map(([key, value]) => (
              <div
                key={key}
                onClick={() => navigate(value.redirect)}
                className={`flex items-center justify-start p-3 text-slate-600 transition-colors duration-300 hover:cursor-pointer hover:bg-arcLight ${
                  selectedItem === key ? "bg-gray-300 text-black font-bold" : ""
                }`}
              >
                {value.icon}
                <span className="pl-3 text-lg">{value.text}</span>
              </div>
            ))}

            <span className="font-bold text-darkerGray p-3">Records</span>

            {Object.entries(sidebarContent.records).map(([key, value]) => (
              <div
                key={key}
                onClick={() => navigate(value.redirect)}
                className={`flex items-center justify-start p-3 text-slate-600 transition-colors duration-300 hover:cursor-pointer hover:bg-arcLight ${
                  selectedItem === key ? "bg-gray-300 text-black font-bold" : ""
                }`}
              >
                {value.icon}
                <span className="pl-3 text-lg">{value.text}</span>
              </div>
            ))}
          </div>

          {/* Bottom Part */}
          <div className="flex flex-col p-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-lg">
              {Object.entries(sidebarContent.controls).map(([key, value]) => (
                <div
                  key={key}
                  onClick={key === "logout" ? value.action : undefined}
                  className="flex items-center gap-4 rounded-lg px-4 py-2 text-slate-700 transition-colors duration-300 hover:cursor-pointer hover:bg-arcLight"
                >
                  {value.icon}
                  <span className="text-base">{value.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-3 flex justify-around items-center">
              <div className="w-10 h-10 rounded-full bg-arcLight"></div>
              <div className="flex flex-col ">
                <span>{fullName}</span>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
