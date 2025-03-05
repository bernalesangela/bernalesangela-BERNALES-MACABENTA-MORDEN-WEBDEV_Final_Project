import React from "react";

export const ItemCard = ({ itemName }) => {
  return (
    <section className="flex flex-col items-center gap-2">
      <div className="h-[9.5rem] w-[9.5rem] bg-lightGray p-5 shadow-lg rounded-lg"></div>
      <label className="font-semibold max-w-[9rem] text-center">
        {itemName}
      </label>
    </section>
  );
};
