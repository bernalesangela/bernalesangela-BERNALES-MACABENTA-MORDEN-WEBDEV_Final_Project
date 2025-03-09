import React from "react";
import DropdownSelect from "../../../../components/ui/DropdownSelect";
import { CaretRight } from "@phosphor-icons/react";

const SalesOrder = () => {
  const handleSelection = (value) => {
    console.log("Selected:", value);
  };

  return (
    <section className="p-5 bg-solidWhite rounded-lg shadow-lg flex flex-col flex-1 ">
      <div className="w-full flex justify-between">
        <h2>Sales Order</h2>

        <select className="text-left pl-3 bg-transparent ">
          <option>Last 7 Days</option>
          <option>1 Month</option>
          <option>1 Year</option>
        </select>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Schedule ID</th>
              <th className="px-4 py-2 text-left">Employee ID</th>
              <th className="px-4 py-2 text-left">Packed ID</th>
              <th className="px-4 py-2 text-left">No. of Items</th>
              <th className="px-4 py-2 text-left">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(3)].map((_, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-2">#00000</td>
                <td className="px-4 py-2">#00000</td>
                <td className="px-4 py-2">32</td>
                <td className="px-4 py-2">32</td>
                <td className="px-4 py-2">32</td>
                <td className="px-4 py-2">32</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="mt-4 self-end flex items-center justify-center ">
        See more
        <CaretRight size={30} weight="light" />
      </button> */}
    </section>
  );
};

export default SalesOrder;
