// import React from "react"
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";

import FoodCard, { highRatedRestaurants } from "./FoodCard";
import CardShimmer from "./CardShimmer";

const Body = () => {
  const listRestaurants = useRestaurantList();

  const HighRatedRestaurants = highRatedRestaurants(FoodCard);

  return (
    <div className="relative top-5 left-32">
      {listRestaurants.length === 0 ? (
        <CardShimmer />
      ) : (
        <div className="flex flex-wrap">
          {listRestaurants.map((rest) => (
            <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
              {rest.info.avgRating >= 4.2 ? (
                <HighRatedRestaurants reqObj={rest} />
              ) : (
                <FoodCard reqObj={rest} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
