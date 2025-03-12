import React from "react";
import Layout from "../../layout";
import { CaretLeft } from "@phosphor-icons/react";

const RegisterEmployee = () => {
  return (
    <Layout>
      <section className="h-full flex flex-col gap-5 overflow-y-hidden">
        <div className="w-full flex items-center gap-3">
          <div
            className="bg-lightGray p-1 rounded-full hover:scale-110 transition-all duration-150 hover:cursor-pointer"
            // onClick={() => navigate("/admin/inventory")}
          >
            <CaretLeft size={25} />
          </div>
          <h1 className="text-blueSerenity py-5">Register Employee</h1>
        </div>

        <h2>Employee Details</h2>
        <form
          //   onSubmit={handleSubmit}
          className="bg-solidWhite flex rounded-lg shadow-lg p-10 h-full flex-col gap-5 last:justify-end"
        >
          <div className="w-full flex flex-col gap-1">
            <label>Full Name</label>
            <input
              placeholder="Enter product name"
              className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label>Role</label>
            <input
              placeholder="Enter product name"
              className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
              required
            />
          </div>

          <div className="flex items-center w-full gap-5">
            <div className="w-full flex flex-col gap-1">
              <label>Age</label>
              <input
                placeholder="Enter product name"
                className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label>Gender</label>
              <input
                placeholder="Enter product name"
                className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1">
            <label>Number</label>
            <input
              placeholder="Enter product name"
              className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label>Email</label>
            <input
              placeholder="Enter product name"
              className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label>Address</label>
            <input
              placeholder="Enter product name"
              className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
              required
            />
          </div>

          <div className="w-full justify-end flex h-full mt-auto">
            <button
              type="submit"
              className="self-end hover:scale-105 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default RegisterEmployee;
