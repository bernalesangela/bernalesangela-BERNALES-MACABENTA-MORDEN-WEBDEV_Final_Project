import React from "react";
import DropdownSelect from "../../../../components/ui/DropdownSelect";

const SalesOrder = () => {
  const handleSelection = (value) => {
    console.log("Selected:", value);
  };

  return (
    <section className=" p-10 bg-solidWhite rounded-lg shadow-lg h-full">
      <div className="w-full flex justify-between">
        <h2>Sales Order</h2>
        <DropdownSelect
          //   label="Select an option"
          options={["Last 7 Days", "1 Month", "1 Year"]}
          onChange={handleSelection}
        />
      </div>

      <div>
        <table className="w-full">
          {/* Table Head */}
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

          {/* Table Body */}
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">#00000</td>
              <td className="px-4 py-2">#00000</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">#00000</td>
              <td className="px-4 py-2">#00000</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">#00000</td>
              <td className="px-4 py-2">#00000</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">32</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SalesOrder;
