import React from "react";
import { ChartLine } from "@phosphor-icons/react";
import { CalendarDots } from "@phosphor-icons/react";
import { CurrencyCircleDollar } from "@phosphor-icons/react";
import { ChefHat } from "@phosphor-icons/react";

export const SalesSummary = () => {
  return (
    <section className=" p-10 bg-solidWhite rounded-lg shadow-lg">
      <h2>Sales Summary</h2>

      <div className="py-5">
        <div className="flex items-center w-full justify-between">
          {/* sales summary section */}
          <div className="flex gap-3 items-center bg-white p-5 rounded-lg shadow-lg text-lg max-w-[20.75rem] w-full">
            <ChartLine size={40} weight="light" />
            <div className="flex flex-col">
              <span className="font-semibold text-darkerGray">143.3k</span>
              <label className="text-lunarGray font-semibold">
                Today's Sale
              </label>
            </div>
          </div>

          {/* yearly total sales section */}
          <div className="flex gap-3 items-center bg-white p-5 rounded-lg shadow-lg text-lg max-w-[20.75rem] w-full">
            <CalendarDots size={40} weight="light" />
            <div className="flex flex-col">
              <span className="font-semibold text-darkerGray">
                PHP 250,423.00
              </span>
              <label className="text-lunarGray font-semibold">
                Yearly Total Sales
              </label>
            </div>
          </div>

          {/* net income section */}
          <div className="flex gap-3 items-center bg-white p-5 rounded-lg shadow-lg text-lg max-w-[20.75rem] w-full">
            <CurrencyCircleDollar size={40} weight="light" />
            <div className="flex flex-col">
              <span className="font-semibold text-darkerGray">PHP 68.90k</span>
              <label className="text-lunarGray font-semibold">Net Income</label>
            </div>
          </div>

          {/* products section */}
          <div className="flex gap-3 items-center bg-white p-5 rounded-lg shadow-lg text-lg max-w-[20.75rem] w-full">
            <ChefHat size={40} weight="light" />
            <div className="flex flex-col">
              <span className="font-semibold text-darkerGray">50</span>
              <label className="text-lunarGray font-semibold">Products</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
