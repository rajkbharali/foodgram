import React from "react";
import useFoodCategoryMenu from "../utils/useFoodCategoryMenu";
import { Link, useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import CardShimmer from "./CardShimmer";

const FoodCategory = () => {
  const params = useParams();
  const { id1, id2 } = params;
  const foodList = useFoodCategoryMenu(id1, id2);
  console.log(foodList);
  if (foodList === null)
    return (
      <div className="mx-32 my-8">
        <CardShimmer />
      </div>
    );

  const restCards = foodList.filter(
    (x) =>
      x?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  const infoCard = foodList[0].card.card;
  // console.log(restCards);
  return (
    <div className="mx-32 my-8">
      <h1 className="ml-16 text-4xl font-semibold">{infoCard.title}</h1>
      <p className="ml-16 py-5 text-gray-500">{infoCard.description}</p>
      <div className="grid grid-cols-[repeat(auto-fill,250px)] gap-x-2 justify-center">
        {restCards.map((x) => (
          <Link
            key={x.card.card.info.id}
            to={`/restaurants/${x.card.card.info.id}`}
          >
            <FoodCard reqObj={x.card.card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
