import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import { setOpen } from "../utils/modalSlice";
import { removeResName } from "../utils/restaurantSlice";

const CartItemsAlertModal = () => {
  const dispatch = useDispatch();

  const handleCartItems = () => {
    dispatch(clearCart());
    dispatch(setOpen());
    dispatch(removeResName());
  };
  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[40%]">
        <h1 className="text-2xl font-semibold">Items already in cart</h1>
        <p className="py-3">
          Your cart contains items from other restaurant. Would you like to
          reset your cart for adding items from this restaurant?
        </p>
        <div className="flex justify-between items-center">
          <Link to="/cart">
            <button
              className="m-2 px-8 py-2 border-4 border-black rounded-md text-xl font-semibold"
              onClick={() => dispatch(setOpen())}
            >
              Go To Cart
            </button>
          </Link>
          <button
            className="m-2 px-8 py-2 border-4 bg-black border-black rounded-md text-xl text-white font-semibold"
            onClick={handleCartItems}
          >
            Discard Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemsAlertModal;
