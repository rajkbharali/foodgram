import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authenticateReducer from "./authenticateSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    authenticate: authenticateReducer,
  },
});

export default store;
