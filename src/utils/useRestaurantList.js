import { useEffect, useState } from "react"

const useRestaurantList = () => {
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

    return listRestaurants
}

export default useRestaurantList