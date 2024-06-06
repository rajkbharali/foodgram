import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResName } from "./restaurantSlice";
import { setOpen } from "./modalSlice";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const restaurantInfo = useSelector((state) => state.restData.name);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
    );
    const json = await data.json();
    setResInfo(json.data);
  }

  useEffect(() => {
    if (resInfo !== null) {
      const { name } = resInfo?.cards[2]?.card.card.info;
      if (restaurantInfo === null || restaurantInfo === name) {
        dispatch(addResName({ name }));
      } else if (
        restaurantInfo !== name &&
        Object.keys(cartItems).length === 0
      ) {
        dispatch(addResName({ name }));
      } else {
        dispatch(setOpen());
      }
    }
  }, [resInfo, restaurantInfo]);

  return resInfo;
};

export default useRestaurantMenu;
