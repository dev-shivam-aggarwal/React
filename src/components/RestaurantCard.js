import { useContext } from "react";
import { SRC_URL } from "../utils/helpers";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ data }) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    data.info;

  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="w-[238px] mt-4">
      <img
        className="rounded-2xl"
        alt="resturant-img"
        src={SRC_URL + cloudinaryImageId}
      />
      <h2 className="font-serif text-2xl font-bold mt-4">{name}</h2>
      <h2 className="font-mono font-medium text-md">{avgRatingString} Rating</h2>
      <h4 className="text-gray-500">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-500">{areaName}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) =>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
 
export default RestaurantCard;
