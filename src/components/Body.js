// import React from "react"
import useRestaurantList from "../utils/useRestaurantList"
import { Link } from "react-router-dom"

import FoodCard from "./FoodCard"
import CardShimmer from "./CardShimmer"

const Body = () => {
    const listRestaurants = useRestaurantList()

    return (
        <div className="relative top-5 left-32">
            {listRestaurants.length===0 ? <CardShimmer/> : (
                <div className="flex flex-wrap">
                    {listRestaurants.map(rest => <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}><FoodCard reqObj={rest}/></Link>)}
                </div>

            )}
        </div>
    )
}

export default Body