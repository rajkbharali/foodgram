// import React from "react"
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";

import FoodCard, { highRatedRestaurants } from "./FoodCard";
import CardShimmer from "./CardShimmer";
import BodyNavBar from "./BodyNavBar";

const Body = () => {
  const { listRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantList();

  const HighRatedRestaurants = highRatedRestaurants(FoodCard);

  return (
    <div className="relative top-5 left-64 w-2/3">
      {listRestaurants.length === 0 ? (
        <CardShimmer />
      ) : (
        <div>
          <BodyNavBar
            restList={listRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
          />
          <div className="flex flex-wrap">
            {filteredRestaurants.map((rest) => (
              <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
                {rest.info.avgRating >= 4.2 ? (
                  <HighRatedRestaurants reqObj={rest} />
                ) : (
                  <FoodCard reqObj={rest} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
