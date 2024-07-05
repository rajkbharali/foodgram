import React, { useEffect, useState } from "react";

const useFoodCategoryMenu = (id1, id2) => {
  const [foodList, setFoodList] = useState(null);

  useEffect(() => {
    fetchFoodList();
  }, []);

  async function fetchFoodList() {
    // const data = await fetch(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=${id2}&tags=layout_CCS_${
    //       id1.split("")[0].toUpperCase() + id1.slice(1)
    //     }&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    //   )}`
    // );
    const data = await fetch(
      `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26collection%3D${id2}%26tags%3Dlayout_CCS_${
        id1.split("")[0].toUpperCase() + id1.slice(1)
      }%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull%60`
    );
    const response = await data.json();
    // const json = await JSON.parse(response.contents);
    const json = await response;
    // console.log(json);
    const restList = json?.data?.cards;
    setFoodList(restList);
  }
  return foodList;
};

export default useFoodCategoryMenu;
