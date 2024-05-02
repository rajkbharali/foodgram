import { IoMdRadioButtonOn } from "react-icons/io";

const CartItems = ({ menuData }) => {
  // console.log(menuData);

  const MENU_IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const { name, price, defaultPrice, description, isVeg, imageId } =
    menuData.card.info;

  return (
    <div data-testid="cartItem" className="mx-2 my-4 shadow-lg">
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
          <div className="flex flex-col relative mb-4">
            <img
              className="m-2 w-40 h-40 rounded-2xl"
              src={MENU_IMG_URL + imageId}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartItems;