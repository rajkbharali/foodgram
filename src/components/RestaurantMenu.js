import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";
import MenuItemShimmer from "./MenuItemShimmer";
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GiCycling } from "react-icons/gi";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);

  const params = useParams();

  //Custom Hook
  const resInfo = useRestaurantMenu(params.id);

  if (resInfo === null) return <MenuItemShimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = resInfo?.cards[2]?.card.card.info;

  const restaurantCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (x) =>
        x?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-2/3 m-auto">
      <h1 className="mt-12 mb-4 text-left font-bold text-2xl">{name}</h1>
      <div className="border rounded-xl mb-8 p-5 shadow-xl">
        <div className="flex items-center font-semibold">
          <MdStars className="mr-1 text-green-700" />
          <p className="pr-1">{avgRating}</p>
          <p className="pr-2">({totalRatingsString})</p>
          <p className="flex items-center  pr-2">
            <GoDotFill className="text-sm text-gray-400 " /> {costForTwoMessage}
          </p>
        </div>
        <p className="text-sm font-semibold underline text-orange-500">
          {cuisines.join(", ")}
        </p>
        <p className="flex my-2 items-center font-semibold text-sm">
          <GoDotFill className="text-gray-400 mr-2" /> Outlet
          <span className="text-gray-400 text-xs pl-2">{areaName}</span>
        </p>
        <p className="flex mb-3 items-center text-sm font-semibold">
          <GoDotFill className="text-gray-400 mr-2" />
          {sla.slaString.toLowerCase()}
        </p>
        <hr />
        <div className="flex my-3 text-gray-500">
          <GiCycling className="text-xl mr-2" />
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: feeDetails.message }}
          ></p>
        </div>
      </div>
      {restaurantCategories?.map((x, index) => (
        <RestaurantMenuCategory
          key={index}
          data={x}
          showItems={index === showItems ? true : false}
          setShowItems={() => {
            if (index === showItems) {
              setShowItems(null);
            } else {
              setShowItems(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
