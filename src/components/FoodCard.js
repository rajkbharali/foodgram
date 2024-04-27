import { IMAGE_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const FoodCard = ({reqObj}) => {
    const backgroundUrl = IMAGE_URL + reqObj?.info?.cloudinaryImageId

    return (
        <div className="relative w-60 my-2 mx-4 hover:scale-95 ease-in-out duration-300">
            <div 
                className="flex items-end h-60 top-0 text-white text-lg rounded-3xl shadow-[inset_black_0_-70px_50px_-15px]"
                style={{backgroundImage: `url(${backgroundUrl})`, backgroundSize : "cover"}}
            >
                {reqObj?.info?.aggregatedDiscountInfoV3 ? (
                    <p className="m-3">{reqObj?.info?.aggregatedDiscountInfoV3?.header + " " + reqObj?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
                ) : ""}
            </div>
            <div className="mx-2">
                <p className="text-lg whitespace-nowrap overflow-hidden"><b>{reqObj?.info?.name}</b></p>
                <p className="flex items-center">
                    <MdStars className="mr-1 text-green-700"/> <b className="mr-1">{reqObj?.info?.avgRatingString}</b> | <b className="ml-1">{reqObj?.info?.sla?.slaString}</b>
                </p>
                <p className="text-sm whitespace-nowrap overflow-hidden text-gray-500">{reqObj?.info?.cuisines.join(", ")}</p>
                <p className="text-sm whitespace-nowrap overflow-hidden text-gray-500">{reqObj?.info?.locality}</p>
            </div>
        </div>
    )
}

//Higher Order Function
export const highRatedRestaurants = (FoodCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute z-10 m-2 px-3 py-1 bg-black text-white text-sm rounded-2xl">TOP RATED</label>
                <FoodCard {...props}/>
            </>
        )
    }
}

export default FoodCard