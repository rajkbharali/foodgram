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
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
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
