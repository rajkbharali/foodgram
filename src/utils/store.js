import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authenticateSlice from "./authenticateSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    authenticate: authenticateSlice,
  },
});

export default store;
