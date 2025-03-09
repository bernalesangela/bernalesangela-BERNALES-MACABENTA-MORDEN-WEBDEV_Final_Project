import React from "react";
import DropdownSelect from "../../../../components/ui/DropdownSelect";
import { CaretRight } from "@phosphor-icons/react";

const SalesOrder = () => {
  const handleSelection = (value) => {
    console.log("Selected:", value);
  };

  return (
    <section className="p-5 bg-solidWhite rounded-lg shadow-lg flex flex-col h-fit">
      <div className="w-full flex justify-between">
        <h2>Sales Order</h2>

        <select className="text-left pl-3 bg-white ">
          <option>Last 7 Days</option>
          <option>1 Month</option>
          <option>1 Year</option>
        </select>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">
                Total No. of Products Sold
              </th>
              <th className="px-4 py-2 text-left">Total Sales</th>
              <th className="px-4 py-2 text-left">Total Transactions</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(3)].map((_, i) => (
              <tr key={i} className="hover:bg-arcLight">
                <td className="px-4 py-2">#00000</td>
                <td className="px-4 py-2">#00000</td>
                <td className="px-4 py-2">32</td>
                <td className="px-4 py-2">32</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SalesOrder;
