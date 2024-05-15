import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restData",
  initialState: {
    name: null,
  },
  reducers: {
    addResName: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
      };
    },
    removeResName: (state, action) => {
      return {
        ...state,
        name: null,
      };
    },
  },
});

export const { addResName, removeResName } = restaurantSlice.actions;
export default restaurantSlice.reducer;
