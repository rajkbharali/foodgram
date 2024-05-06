// import React from "react"
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";

import FoodCard, { highRatedRestaurants } from "./FoodCard";
import CardShimmer from "./CardShimmer";
import BodyNavBar from "./BodyNavBar";
import BodyDishCarousel from "./BodyDishCarousel";
import DishShimmer from "./DishShimmer";
import TopRestaurantCarousel from "./TopRestaurantCarousel";

const Body = () => {
  const {
    listRestaurants,
    dishCarouselItems,
    filteredRestaurants,
    topRestaurants,
    setFilteredRestaurants,
  } = useRestaurantList();

  const HighRatedRestaurants = highRatedRestaurants(FoodCard);

  return (
    <div className="mx-32 my-8">
      {listRestaurants?.length === 0 ? (
        <>
          <DishShimmer />
          <CardShimmer />
        </>
      ) : (
        <div className="">
          {dishCarouselItems && <BodyDishCarousel data={dishCarouselItems} />}
          <TopRestaurantCarousel data={topRestaurants} />
          <h1 className="text-2xl font-bold ml-5 mt-5">
            Restaurants with online food delivery
          </h1>
          <BodyNavBar
            restList={listRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
          />
          <div className="flex flex-wrap justify-center">
            {filteredRestaurants?.map((rest) => (
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
