import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

import RestaurantMenuCategory from "./RestaurantMenuCategory"
import { useState } from "react"
import MenuItemShimmer from "./MenuItemShimmer"

const RestaurantMenu = () => {
    const [showItems, setShowItems] = useState(null)

    const params = useParams()

    //Custom Hook
    const resInfo = useRestaurantMenu(params.id)

    if(resInfo === null) return <MenuItemShimmer/>

    const { name } = resInfo?.cards[2]?.card.card.info

    const restaurantCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(x=>x.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return (
        <div className="w-2/3 m-auto">
            <h1 className="mx-5 my-8 text-left font-bold text-2xl">{name}</h1>
            {restaurantCategories.map((x,index)=> 
                <RestaurantMenuCategory 
                    key={index} 
                    data={x}
                    showItems={index === showItems ? true : false}
                    setShowItems={() => {
                        if(index === showItems){
                            setShowItems(null)
                        } 
                        else{
                            setShowItems(index)  
                        } 
                    }}
                />
            )}
        </div>
    )
}

export default RestaurantMenu