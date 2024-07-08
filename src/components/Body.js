import RestaurantCard from "./RestaurantCard";
import { MOCK_DATA } from "../utils/helpers";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [tempResList, setTempResList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    <div>
      <h1>Top restaurant chains in Chandigarh</h1>
      <input
        type="text"
        placeholder="Search Here"
        className="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          const filteredList = restaurantList.filter((x) =>
            x.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setTempResList(filteredList);
        }}
      >
        Search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterResult();
        }}
      >
        Filterd the restaurant
      </button>
      <div className="resturant-card">
        {tempResList.map((res) => (
          <RestaurantCard data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
