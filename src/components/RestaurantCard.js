import { SRC_URL } from "../utils/helpers";
const RestaurantCard = ({ data }) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    data.info;
  return (
    <div className="card">
      <img
        className="resturant-img"
        alt="resturant-img"
        src={SRC_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h2>{avgRatingString} Rating</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
