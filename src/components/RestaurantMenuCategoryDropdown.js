import { IoMdRadioButtonOn } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  increaseDecreaseAnItemCount,
  removeItem,
} from "../utils/cartSlice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const RestaurantMenuCategoryDropdown = ({ menuData }) => {
  // console.log(menuData);
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleAddCardItems = (item, id) => {
    const newObj = {
      [id]: item,
    };
    // console.log(newObj);
    dispatch(addItem(newObj));
  };

  const handleIncreaseItemCount = (item, id) => {
    // console.log(item);
    const newQuantity = item.quantity + 1;
    const newObj = {
      [id]: { ...item, quantity: newQuantity },
    };
    // console.log(newObj);
    dispatch(increaseDecreaseAnItemCount(newObj));
  };

  const handleDecreaseItemCount = (item, id) => {
    if (item.quantity === 1) {
      dispatch(removeItem(id));
    } else {
      const newQuantity = item.quantity - 1;
      const newObj = {
        [id]: { ...item, quantity: newQuantity },
      };
      dispatch(increaseDecreaseAnItemCount(newObj));
    }
  };

  const MENU_IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const { id, name, price, defaultPrice, description, isVeg, imageId } =
    menuData.card.info;

  return (
    <div className="mx-2 my-4 shadow-lg">
      <div className="flex">
        <div className="my-2.5 ml-4 mr-20 w-2/3 min-h-20">
          {!!isVeg ? (
            <IoMdRadioButtonOn className="text-green-500" />
          ) : (
            <IoMdRadioButtonOn className="text-red-600" />
          )}
          <p className="font-bold text-l text-gray-500">{name}</p>
          <p>₹ {price ? price / 100 : defaultPrice / 100}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        {imageId ? (
          <div className="flex flex-col relative mb-5 pb-2">
            <img
              className="m-2 w-40 h-36 rounded-2xl"
              src={MENU_IMG_URL + imageId}
            />
            {cartItems && cartItems?.[id] ? (
              <div className="absolute flex items-center top-32 left-9 m-2 py-1 border-2 border-white rounded-lg font-semibold text-lg text-white bg-black">
                <FaMinus
                  className="mx-2 text-xs cursor-pointer"
                  onClick={() => handleDecreaseItemCount(cartItems[id], id)}
                />
                <p className="mx-2">{cartItems[id].quantity}</p>
                <FaPlus
                  className="mx-2 text-xs cursor-pointer"
                  onClick={() => handleIncreaseItemCount(cartItems[id], id)}
                />
              </div>
            ) : (
              <button
                className="absolute top-32 left-9 m-2 px-6 py-1 border-2 border-white rounded-lg font-semibold text-lg text-white bg-black cursor-pointer"
                onClick={() =>
                  handleAddCardItems({ ...menuData, quantity: 1 }, id)
                }
              >
                ADD
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col m-auto justify-center">
            {cartItems && cartItems?.[id] ? (
              <div className="flex items-center m-2 py-1 mr-5 border-2 border-white rounded-lg font-semibold text-lg text-white bg-black cursor-pointer">
                <FaMinus
                  className="mx-2 text-xs cursor-pointer"
                  onClick={() => handleDecreaseItemCount(cartItems[id], id)}
                />
                <p className="mx-2">{cartItems[id].quantity}</p>
                <FaPlus
                  className="mx-2 text-xs cursor-pointer"
                  onClick={() => handleIncreaseItemCount(cartItems[id], id)}
                />
              </div>
            ) : (
              <button
                className="m-2 px-6 py-1 mr-5 border-2 border-white rounded-lg font-semibold text-lg text-white bg-black cursor-pointer"
                onClick={() =>
                  handleAddCardItems({ ...menuData, quantity: 1 }, id)
                }
              >
                ADD
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuCategoryDropdown;
