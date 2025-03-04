import React from "react";
import logo from "../pages/login/logo.svg";

const Sidebar = () => {
  const sidebarContent = {
    main: {
      dashboard: {
        text: "Dashboard",
        redirect: "/admin/dashboard",
        // icon: <ChartPie width={24} height={24} />,
      },
      restock: {
        text: "Create Order",
        redirect: "/admin/restock",
        // icon: <Archive width={24} height={24} />,
      },
    },
    records: {
      suppliers: {
        text: "Products",
        redirect: "/admin/suppliers",
        // icon: <Truck width={24} height={24} />,
      },
      customers: {
        text: "Transactions",
        redirect: "/admin/customers",
        // icon: <Users2 width={24} height={24} />,
      },
      inventory: {
        text: "Inventory",
        redirect: "/admin/inventory",
        // icon: <Package2 width={24} height={24} />,
      },
      employees: {
        text: "Sales Tracking",
        redirect: "/admin/employees",
        // icon: <IdCard width={24} height={24} />,
      },

      history: {
        text: "History",
        redirect: "/admin/history",
        // icon: <History width={24} height={24} />,
      },
    },
    controls: {
      settings: {
        text: "Settings",
        redirect: "",
        // icon: <Settings width={24} height={24} />,
      },
      about: {
        text: "About",
        redirect: "",
        // icon: <Info width={24} height={24} />,
      },
      logout: {
        text: "Logout",
        redirect: "",
        // icon: <LogOut width={24} height={24} />,
      },
    },
  };
  return (
    <section
      className={`bg-solidWhite  py-10 duration-300  flex h-screen w-[13.125rem] `}
    >
      <div className="flex flex-col justify-between">
        {/* top part */}
        <div className="flex flex-col">
          <img src={logo} alt="logo" />
          <span className=" font-bold text-darkerGray p-3">General</span>

          {Object.entries(sidebarContent.main).map(([key, value]) => (
            <div
              key={key}
              className={`flex items-center justify-start p-3 text-slate-600 transition-colors duration-300 hover:cursor-pointer hover:bg-arcLight }`}
            >
              {value.icon}
              <span className="pl-5 text-lg">{value.text}</span>
            </div>
          ))}

          <span className=" font-bold text-darkerGray p-3">Records</span>

          {Object.entries(sidebarContent.records).map(([key, value]) => (
            <div
              key={key}
              className={`flex items-center justify-start p-3 text-slate-600 transition-colors duration-300 hover:cursor-pointer hover:bg-arcLight }`}
            >
              {value.icon}
              <span className="pl-5 text-lg">{value.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom part */}
        <div className="flex flex-col p-3 gap-3">
          <div className="bg-white rounded-lg p-3">
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
