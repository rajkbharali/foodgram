import React, { useEffect, useState } from "react";

const useFoodCategoryMenu = (id1, id2) => {
  const [foodList, setFoodList] = useState(null);

  useEffect(() => {
    fetchFoodList();
  }, []);

  async function fetchFoodList() {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=${id2}&tags=layout_CCS_${
          id1.split("")[0].toUpperCase() + id1.slice(1)
        }&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      )}`
    );
    const response = await data.json();
    const json = await JSON.parse(response.contents);
    // console.log(json);
    const restList = json?.data?.cards;
    setFoodList(restList);
  }
  return foodList;
};

export default useFoodCategoryMenu;
