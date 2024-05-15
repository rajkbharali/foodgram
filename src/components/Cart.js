import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { EMPTY_CART, IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { clearCart } from "../utils/cartSlice";
import BillingCard from "./BillingCard";
import { removeResName } from "../utils/restaurantSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(removeResName());
  };

  return Object.keys(cartItems).length === 0 ? (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img className="w-[30rem]" src={EMPTY_CART} />
      </div>
      <h1 className="text-lg font-semibold">You cart is empty</h1>
      <h1 className="text-sm text-gray-500">
        You can go to homepage to explore restaurants
      </h1>
      <Link to="/">
        <button className="m-2 p-2 bg-black text-white rounded-md">
          See Restaurants Near You
        </button>
      </Link>
    </div>
  ) : (
    <div className="w-2/3 mx-auto my-5 py-5">
      <div className="flex items-center justify-between mx-2 px-2 py-3 bg-gray-300 rounded-md">
        <h1 className="font-semibold text-xl">Cart Details</h1>
        <button
          className="flex items-center bg-black text-white m-1 p-2 rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart <RiDeleteBin6Line className="ml-1" />
        </button>
      </div>
      <div>
        {Object.values(cartItems).map((x, index) => (
          <CartItems key={index} menuData={x} cartItems={cartItems} />
        ))}
      </div>
      <BillingCard data={cartItems} />
    </div>
  );
};

export default Cart;
