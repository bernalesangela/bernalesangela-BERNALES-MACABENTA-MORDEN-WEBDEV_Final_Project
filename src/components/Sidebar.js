import React from "react";
import logo from "../pages/login/logo.svg";
import { ChartBar } from "@phosphor-icons/react";
import { Invoice } from "@phosphor-icons/react";
import { Package } from "@phosphor-icons/react";
import { UsersThree } from "@phosphor-icons/react";
import { CashRegister } from "@phosphor-icons/react";
import { ClockCounterClockwise } from "@phosphor-icons/react";
import { Cookie } from "@phosphor-icons/react";
import { Gear } from "@phosphor-icons/react";
import { Info } from "@phosphor-icons/react";
import { SignOut } from "@phosphor-icons/react";
import { useState } from "react";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const sidebarContent = {
    main: {
      dashboard: {
        text: "Dashboard",
        redirect: "/admin/dashboard",
        icon: <ChartBar size={30} weight="light" />,
      },
      restock: {
        text: "Create Order",
        redirect: "/admin/restock",
        icon: <Invoice size={30} weight="light" />,
      },
    },
    records: {
      suppliers: {
        text: "Products",
        redirect: "/admin/suppliers",
        icon: <Cookie size={30} weight="light" />,
      },
      customers: {
        text: "Transactions",
        redirect: "/admin/customers",
        icon: <UsersThree size={30} weight="light" />,
      },
      inventory: {
        text: "Inventory",
        redirect: "/admin/inventory",
        icon: <Package size={30} weight="light" />,
      },
      employees: {
        text: "Sales Tracking",
        redirect: "/admin/employees",
        icon: <CashRegister size={30} weight="light" />,
      },

      history: {
        text: "History",
        redirect: "/admin/history",
        icon: <ClockCounterClockwise size={30} weight="light" />,
      },
    },
    controls: {
      settings: {
        text: "Settings",
        redirect: "",
        icon: <Gear size={25} weight="light" />,
      },
      about: {
        text: "About",
        redirect: "",
        icon: <Info size={25} weight="light" />,
      },
      logout: {
        text: "Logout",
        redirect: "",
        icon: <SignOut size={25} weight="light" />,
      },
    },
  };
  return (
    <section
      className={`bg-solidWhite  py-10 duration-300  flex h-screen w-[15.125rem] `}
    >
      <div className="flex flex-col justify-between">
        {/* top part */}
        <div className="flex flex-col">
          <img src={logo} alt="logo" />
          <span className="font-bold text-darkerGray p-3">General</span>

          {Object.entries(sidebarContent.main).map(([key, value]) => (
            <div
              key={key}
              onClick={() => setSelectedItem(key)} // Set selected item
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
              onClick={() => setSelectedItem(key)} // Set selected item
              className={`flex items-center justify-start p-3 text-slate-600 transition-colors duration-300 hover:cursor-pointer hover:bg-arcLight ${
                selectedItem === key ? "bg-gray-300 text-black font-bold" : ""
              }`}
            >
              {value.icon}
              <span className="pl-3 text-lg">{value.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom part */}
        <div className="flex flex-col p-3 gap-3">
          <div className="bg-white rounded-lg p-3 text-lg">
            {Object.entries(sidebarContent.controls).map(([key, value]) => (
              <div
                key={key}
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
              <span>User</span>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
