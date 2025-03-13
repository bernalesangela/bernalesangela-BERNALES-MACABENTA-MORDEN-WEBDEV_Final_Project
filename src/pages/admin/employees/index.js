import React from "react";
import Layout from "../layout";
import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const EmployeePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="h-full flex flex-col justify-between">
        <div className="w-full flex items-center gap-3">
          <div
            className="bg-lightGray p-1 rounded-full hover:scale-110 transition-all duration-150 hover:cursor-pointer"
            // onClick={() => navigate("/admin/inventory")}
          >
            <CaretLeft size={25} />
          </div>
          <h1 className="text-blueSerenity py-5">Employees</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between gap-3">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center relative">
              <input
                className=" text-left pl-14"
                placeholder="Search by name or product number"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MagnifyingGlass size={32} className="absolute ml-3" />
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                className="flex items-center gap-2 bg-blueSerenity text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                onClick={() => navigate("/admin/employees/register")}
              >
                Register
                <CaretRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-full overflow-hidden flex flex-col gap-3">
          <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center">
            <span className="font-semibold text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
              Employee ID
            </span>
            <span className="font-semibold text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
              Name
            </span>
            <span className="font-semibold text-darkGray text-lg sm:text-sm md:text-base text-left">
              Role
            </span>
            <span className="font-semibold text-darkGray text-lg sm:text-sm md:text-base text-left">
              Contact Number
            </span>
            <span className="font-semibold text-darkGray text-lg sm:text-sm md:text-base text-left">
              Email
            </span>
          </div>

          <div className="h-full overflow-y-scroll flex flex-col gap-3">
            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                Jane Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>

            <div className="w-full rounded-lg p-5 grid grid-cols-5 md:grid-cols-6 items-center bg-solidWhite">
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                #000000
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base md:text-left text-center">
                John Doe
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                Cashier
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                0999999999
              </span>
              <span className="text-darkGray text-lg sm:text-sm md:text-base text-left">
                example@email.com
              </span>
              <CaretRight size={25} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmployeePage;
