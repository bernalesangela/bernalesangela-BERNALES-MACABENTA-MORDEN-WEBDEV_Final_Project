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
            <label>Product Name</label>
            <input
              placeholder="Enter product name"
              className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
              //   value={productName}
              //   onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Category</label>
            <select
              className="w-full text-left pl-3 placeholder:text-lunarGray"
              //   value={category}
              //   onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Cookies">Cookies</option>
              <option value="Bars">Bars</option>
              <option value="Breads">Breads</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label>Product Price</label>
            <input
              type="number"
              step="0.01"
              placeholder="Enter price"
              className="w-full text-left pl-3 text-black placeholder:text-lunarGray"
              //   value={price}
              //   onChange={(e) => setPrice(e.target.value)}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^0-9]/g,
                  ""
                );
              }}
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
