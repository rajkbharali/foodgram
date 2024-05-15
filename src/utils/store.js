import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authenticateSlice from "./authenticateSlice";
import restaurantSlice from "./restaurantSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    authenticate: authenticateSlice,
    restData: restaurantSlice,
    modal: modalSlice,
  },
});

export default store;
