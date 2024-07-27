import RestaurantCard from "./RestaurantCard";
import { MOCK_DATA } from "../utils/helpers";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [tempResList, setTempResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, SetUserName } = useContext(UserContext);

  console.log("tempResList ==>", tempResList);
  const promotedRestrauntCard = withPromotedLabel(restaurantList);

  const filterResult = () => {
    const newList = restaurantList.filter((x) => x.info.avgRating < "4");
    setRestaurantList(newList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const JSONdata = await data.json();
    let finalData =
      JSONdata?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurantList(finalData);
    setTempResList(finalData);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-52">
      <h1 className="text-3xl font-serif font-bold my-11">
        Top restaurant chains in Chandigarh
      </h1>
      <div className="flex justify-between">
        <form>
          <input
            type="text"
            placeholder="Search Here"
            className="border-2 border-black-200 p-2 rounded-3xl w-96"
            value={searchText}
            onChange={(e) => {
              e.preventDefault();
              setSearchText(e.target.value);
              const filteredList = restaurantList.filter((x) =>
                x.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setTempResList(filteredList);
            }}
          ></input>
          <button
            className="bg-slate-200 px-4 py-2 mx-3 rounded-3xl"
            onClick={(e) => {
              e.preventDefault();
              const filteredList = restaurantList.filter((x) =>
                x.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setTempResList(filteredList);
            }}
          >
            Search
          </button>
        </form>
        <input
          className="border-2 border-black-200 px-2 rounded-3xl w-30 h-12"
          value={loggedInUser}
          onChange={(e) => SetUserName(e.target.value)}
        ></input>

        <button
          className="bg-green-400 p-2 rounded-lg my-2"
          onClick={(e) => {
            filterResult();
          }}
        >
          Filterd the restaurant
        </button>
      </div>
      <div className="grid gap-[32] grid-cols-4">
        {tempResList.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCard data={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
