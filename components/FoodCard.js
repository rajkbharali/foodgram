import { IMAGE_URL } from "../utils"
import { MdStars } from "react-icons/md";

const FoodCard = ({reqObj}) => {

    return (
        <div className="food-card-container">
            <div className="food-card-image-container">
                <img className="food-card-image" src={IMAGE_URL + reqObj?.info?.cloudinaryImageId}/>
                <div className="food-card-image-overlay">
                    {reqObj?.info?.aggregatedDiscountInfoV3 ? (
                        <p>{reqObj?.info?.aggregatedDiscountInfoV3?.header + " " + reqObj?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
                    ) : ""}
                </div>
            </div>
            <div className="food-card-body-container">
                <p className="food-card-body-resName"><b>{reqObj?.info?.name}</b></p>
                <p className="food-card-rating-logo">
                    <MdStars/> <b>{reqObj?.info?.avgRatingString}</b> | <b>{reqObj?.info?.sla?.slaString}</b>
                </p>
                <p className="food-card-body-info">{reqObj?.info?.cuisines.join(", ")}</p>
                <p className="food-card-body-info">{reqObj?.info?.locality}</p>
            </div>
        </div>
    )
}

export default FoodCard