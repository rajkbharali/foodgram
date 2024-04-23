// import React from "react"
import { useState,useEffect } from "react"
import FoodCard from "./FoodCard"
import CardShimmer from "./CardShimmer"

const Body = () => {
    const [listRestaurants, setListRestaurants] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        const reqData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListRestaurants(reqData)
        // console.log(reqData)
    }

    return (
        <div className="body-container">
            {listRestaurants.length===0 ? <CardShimmer/> : (
                <div className="food-card-main">
                    {listRestaurants.map(rest => <FoodCard key={rest.info.id} reqObj={rest}/>)}
                </div>

            )}
        </div>
    )
}

export default Body