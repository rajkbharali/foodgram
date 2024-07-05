import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [dishCarouselItems, setDishCarouselItems] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //   )}`
    // );
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    // const json = await JSON.parse(response.contents);
    const json = await response;
    const reqData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const reqDishCarouselData =
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    const topRestaurantData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListRestaurants(reqData);
    setFilteredRestaurants(reqData);
    setDishCarouselItems(reqDishCarouselData);
    setTopRestaurants(topRestaurantData);
    // console.log(json);
  };

  return {
    listRestaurants,
    dishCarouselItems,
    filteredRestaurants,
    topRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurantList;
