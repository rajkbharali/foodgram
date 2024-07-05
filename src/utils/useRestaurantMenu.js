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
    // const data = await fetch(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=346346436`
    //   )}`
    // );
    const data = await fetch(
      `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9351929%26lng%3D77.62448069999999%26restaurantId%3D${id}`
    );
    const response = await data.json();
    // const json = await JSON.parse(response.contents);
    const json = await response;
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
