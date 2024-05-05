import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      return Object.assign(state, action.payload);
    },
    removeItem: (state, action) => {
      delete state[action.payload];
    },
    increaseDecreaseAnItemCount: (state, action) => {
      return Object.assign(state, action.payload);
    },
    clearCart: (state) => {
      Object.keys(state).forEach((x) => delete state[x]);
    },
  },
});

export const { addItem, removeItem, increaseDecreaseAnItemCount, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
