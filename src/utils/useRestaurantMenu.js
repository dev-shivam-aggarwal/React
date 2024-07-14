import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const jsonData = await data.json();

    setResData(jsonData);
  };

  return resData;
};

export default useRestaurantMenu;
