import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import RestaurantMenuCategoryDropdown from "./RestaurantMenuCategoryDropdown";
import { useState } from "react";

const RestaurantMenuCategory = ({data, showItems, setShowItems}) => {
    // console.log(data)
    // const handleClick = () => {
    //     setShowItems()
    // }

    return (
        <div>
            <div className="m-1 shadow-md cursor-pointer rounded-md" onClick={setShowItems}>
                <div className="flex justify-between my-1 p-2 items-center">
                    <div className="m-2.5 font-bold text-lg">{data.card.card.title} ({data.card.card.itemCards.length})</div>
                    {showItems ? (
                        <IoIosArrowUp className="text-2xl cursor-pointer" />
                    ) : (
                        <IoIosArrowDown className="text-2xl cursor-pointer" />
                    )}
                </div>
            </div>
            <div>
                {showItems ? (
                    <div>
                        {data.card.card.itemCards.map((x) => <RestaurantMenuCategoryDropdown key={x.card.info.id} menuData={x}/>)}
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default RestaurantMenuCategory