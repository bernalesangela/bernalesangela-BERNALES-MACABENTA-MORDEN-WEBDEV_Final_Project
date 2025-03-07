import React from "react";
import Layout from "../layout";
import { Car, MagnifyingGlass } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react";
import { Badge } from "./components/badge";

const InventoryPage = () => {
  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex items-center gap-3">
          <h1 className="text-blueSerenity py-5">Inventory</h1>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center relative">
            <input
              className=" text-left pl-14"
              placeholder="Search by name or product number"
            />
            <MagnifyingGlass size={32} className="absolute ml-3" />
          </div>

          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
              Create new Product
              <CaretRight size={20} />
            </button>
          </div>
        </div>

        <div className="px-10 max-h-full h-full overflow-x-auto gap-3 flex flex-col">
          <div className=" w-full rounded-lg p-5 grid grid-cols-6 items-center">
            <span className="font-semibold text-darkGray text-left">
              Event name
            </span>
            <span className="font-semibold text-darkGray text-left">
              Schedule ID
            </span>
            <span className="font-semibold text-darkGray text-left">
              Date Start
            </span>
            <span className="font-semibold text-darkGray text-left">
              Date End
            </span>
            <span className="font-semibold text-darkGray text-left">
              Event Type
            </span>
            <span></span>
          </div>
          {/* 
          badge ids
          1 = School Event
          2 = Social Event
          3 = Workshop
          4 = Others

          pass lang event_type_id diri if
          */}
          <div className="w-full h-full overflow-y-scroll flex flex-col gap-3">
            <div className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-6 items-center">
              <span>Event Name</span>
              <span>#000000</span>
              <span>01/01/25</span>
              <span>01/01/25</span>
              <span>
                <Badge id={1} />
              </span>
              <span>
                <CaretRight size={25} />
              </span>
            </div>
            <div className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-6 items-center">
              <span>Event Name</span>
              <span>#000000</span>
              <span>01/01/25</span>
              <span>01/01/25</span>
              <span>
                <Badge id={2} />
              </span>
              <span>
                <CaretRight size={25} />
              </span>
            </div>

            <div className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-6 items-center">
              <span>Event Name</span>
              <span>#000000</span>
              <span>01/01/25</span>
              <span>01/01/25</span>
              <span>
                <Badge id={3} />
              </span>
              <span>
                <CaretRight size={25} />
              </span>
            </div>

            <div className="bg-solidWhite w-full rounded-lg p-5 grid grid-cols-6 items-center">
              <span>Event Name</span>
              <span>#000000</span>
              <span>01/01/25</span>
              <span>01/01/25</span>
              <span>
                <Badge id={4} />
              </span>
              <span>
                <CaretRight size={25} />
              </span>
            </div>
          </div>
          <div className="flex items-center w-full gap-3">
            <div className="bg-blueSerenity border border-blueSerenity  w-[3rem] h-[3rem] items-center justify-center flex rounded-lg hover:cursor-pointer">
              <span className="text-white">1</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InventoryPage;
