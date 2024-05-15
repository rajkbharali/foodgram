import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    cartItemsModal: false,
    loginModel: false,
  },
  reducers: {
    setOpen: (state, action) => {
      const newState = !state.cartItemsModal;
      return { ...state, cartItemsModal: newState };
    },
    setLoginOpen: (state, action) => {
      const newState = !state.loginModel;
      return { ...state, loginModel: newState };
    },
  },
});

export const { setOpen, setLoginOpen } = modalSlice.actions;
export default modalSlice.reducer;
