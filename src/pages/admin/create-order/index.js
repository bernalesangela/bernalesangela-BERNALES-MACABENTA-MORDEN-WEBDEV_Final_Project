import React, { useState } from "react";
import Layout from "../layout";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ItemCard } from "./components/itemCard";
import Separator from "../../../components/ui/Separator";

const CreateOrder = () => {
  const [discount, setDiscount] = useState(0);
  const [amountPaid, setAmoutPaid] = useState(0);
  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-blueSerenity py-5">Hello, Angela</h1>
          <div className="flex items-center pr-10 ">
            <input
              className=" text-left pl-14"
              placeholder="Search by name or product number"
            />
            <MagnifyingGlass size={32} className="absolute ml-3" />
          </div>
        </div>

        <div className="flex gap-8 h-full">
          <div className="bg-solidWhite flex rounded-lg shadow-lg p-10 max-h-full h-full flex-col">
            {/* Cookies Section  */}
            <div className="w-full ">
              <h2>Cookies</h2>
              <div className="flex gap-5 flex-wrap justify-between">
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
              </div>
            </div>

            {/* Cookies Section */}
            <div className="w-full">
              <h2>Bars</h2>
              <div className="flex gap-5 flex-wrap justify-between">
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
              </div>
            </div>

            {/* Bread Section */}
            <div className="w-full">
              <h2>Bread</h2>
              <div className="flex gap-5 flex-wrap justify-between">
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
                <ItemCard itemName={"Biscoff Cheesecake"} />
              </div>
            </div>
          </div>

          <div className="p-10 bg-solidWhite rounded-lg shadow-lg w-[30%] h-full flex flex-col">
            <h2>Cart</h2>
            <Separator />

            {/* Scrollable Cart Section */}
            <div className="w-full overflow-x-auto max-h-[25rem] flex-grow">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-2">Product</th>
                    <th className="p-2 text-center">Qty</th>
                    <th className="p-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-2">Name</td>
                    <td className="p-2 text-center">0</td>
                    <td className="p-2 text-right">P 0.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-2">Name</td>
                    <td className="p-2 text-center">0</td>
                    <td className="p-2 text-right">P 0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex w-full justify-between px-2 py-2">
              <label className="font-semibold">Total</label>
              <label className="font-semibold">P 0.00</label>
            </div>
            <Separator />

            {/* Payment Details */}
            <div className="flex flex-col gap-2">
              <div className="flex w-full justify-between px-2 py-2 items-center">
                <label className="font-semibold">Discount</label>
                <input
                  className="w-[10rem]"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                  }}
                />
              </div>

              <div className="flex w-full justify-between px-2 py-2 items-center">
                <label className="font-semibold">Amount Paid</label>
                <input
                  className="w-[10rem]"
                  value={amountPaid}
                  onChange={(e) => setAmoutPaid(e.target.value)}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                  }}
                />
              </div>

              <div className="flex w-full justify-between px-2 py-2 items-center">
                <label className="font-semibold">Mode of Payment</label>
                <select className="w-[10rem]">
                  <option>Cash</option>
                  <option>Digital Wallet</option>
                </select>
              </div>
            </div>

            {/* Checkout Button Aligned to Bottom */}
            <div className="mt-auto flex justify-center">
              <button className=" text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateOrder;
