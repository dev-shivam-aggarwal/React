import { useState } from "react";
import RestaurantAccordion from "./RestaurantAccordion";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  return (
    <div>
      <div
        onClick={() => {
            setShowIndex()
        }}
        className="w-full h-14 bg-slate-100 my-6 p-4 font-bold flex justify-between cursor-pointer"
      >
        <span>
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <RestaurantAccordion data={data} />}
    </div>
  );
};

export default RestaurantCategory;
