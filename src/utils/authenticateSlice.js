import { createSlice } from "@reduxjs/toolkit";

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      const newState = !state.loggedIn;
      return { ...state, loggedIn: newState };
    },
  },
});

export const { logIn } = authenticateSlice.actions;

export default authenticateSlice.reducer;
