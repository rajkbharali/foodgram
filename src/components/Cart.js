import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  //   console.log(cartItems);

  return (
    <div className="w-2/3 mx-auto my-4">
      <div></div>
      <div>
        {cartItems.map((x, index) => (
          <CartItems key={index} menuData={x} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
