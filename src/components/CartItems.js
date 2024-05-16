import { IoMdRadioButtonOn } from "react-icons/io";
import { useDispatch } from "react-redux";
import { increaseDecreaseAnItemCount, removeItem } from "../utils/cartSlice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeResName } from "../utils/restaurantSlice";

const CartItems = ({ menuData, cartItems }) => {
  const dispatch = useDispatch();

  const handleIncreaseItemCount = (item, id) => {
    const newQuantity = item.quantity + 1;
    const newObj = {
      [id]: { ...item, quantity: newQuantity },
    };
    dispatch(increaseDecreaseAnItemCount(newObj));
  };

  const handleDecreaseItemCount = (item, id) => {
    if (Object.keys(cartItems).length > 1) {
      if (item.quantity === 1) {
        dispatch(removeItem(id));
      } else {
        const newQuantity = item.quantity - 1;
        const newObj = {
          [id]: { ...item, quantity: newQuantity },
        };
        dispatch(increaseDecreaseAnItemCount(newObj));
      }
    } else {
      if (item.quantity === 1) {
        dispatch(removeItem(id));
        dispatch(removeResName());
      } else {
        const newQuantity = item.quantity - 1;
        const newObj = {
          [id]: { ...item, quantity: newQuantity },
        };
        dispatch(increaseDecreaseAnItemCount(newObj));
      }
    }
  };
  const handleRemoveItem = (id) => {
    if (Object.keys(cartItems).length > 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(removeItem(id));
      dispatch(removeResName());
    }
  };

  const { id, name, price, defaultPrice, isVeg } = menuData?.card?.info;

  return (
    <div
      data-testid="cartItem"
      className="m-2 p-5 flex justify-between items-center shadow-lg "
    >
      <div className="flex items-center">
        {!!isVeg ? (
          <IoMdRadioButtonOn className="text-green-500" />
        ) : (
          <IoMdRadioButtonOn className="text-red-600" />
        )}
        <p className="pl-2 w-3/4 font-semibold text-sm text-gray-500">{name}</p>
      </div>
      <div className="flex items-center">
        <div className="flex items-center top-32 left-9 m-2 py-1 border-2 border-white rounded-lg font-semibold text-lg text-white bg-black">
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
        <RiDeleteBin6Line
          className="hover:text-red-600 cursor-pointer"
          onClick={() => handleRemoveItem(id)}
        />
        <p className="pl-36 font-semibold flex">
          <span className="pr-1">₹</span>
          <span>{price ? price / 100 : defaultPrice / 100}</span>
        </p>
      </div>
    </div>
  );
};

export default CartItems;
