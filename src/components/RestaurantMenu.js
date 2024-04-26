import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

import CardShimmer from "./CardShimmer"

const RestaurantMenu = () => {
    const params = useParams()
    const resInfo = useRestaurantMenu(params.id)

    if(resInfo === null) return <CardShimmer/>

    const {name, cuisines} = resInfo?.cards[2]?.card.card.info

    return (
        <div>
            <h1>{name}</h1>
            <h2>Cuisines : {cuisines.join(", ")}</h2>
        </div>
    )
}

export default RestaurantMenu