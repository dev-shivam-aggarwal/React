import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const params = useParams();
  const resData = useRestaurantMenu(params.resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resData === null) {
    return <Shimmer />;
  }
  const { name, cuisines } = resData?.data?.cards[2]?.card?.card?.info;

  let allData =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categoriesOnly = allData.filter(
    (e) =>
      e.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("Categories only ==>", categoriesOnly);

  return (
    <div className="mx-52 text-left">
      <h1 className="text-2xl mt-9 mb-5 font-bold">{name}</h1>
      <h2>{cuisines.join(", ")}</h2>

      {categoriesOnly.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category}
          showItems={index === showIndex && true}
          setShowIndex  = {()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
