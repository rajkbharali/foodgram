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
          <BodyDishCarousel data={dishCarouselItems} />
          <TopRestaurantCarousel data={topRestaurants} />
          <h1 className="text-2xl font-bold ml-5 mt-5">
            Restaurants with online food delivery
          </h1>
          <BodyNavBar
            restList={listRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
          />
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fill,250px)] gap-x-2 justify-center">
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
          ) : (
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-64"
                alt="not found"
                src="https://img.freepik.com/premium-vector/no-data-concept-illustration_203587-28.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1715817600&semt=ais_user"
              />
              <h1 className="text-lg font-semibold">
                Oops!! Restaurant not found
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
