import { createSlice } from "@reduxjs/toolkit";

// Creates the actions, reducers, and selectors for the global jewel variable
// See https://redux.js.org/tutorials/essentials/part-1-overview-concepts
// See https://redux.js.org/tutorials/essentials/part-2-app-structure
export const jewelSlice = createSlice({
  name: "jewel",
  initialState: {
    value: false,
  },
  reducers: {
    setFound: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setFound } = jewelSlice.actions;

export const selectJewel = (state) => state.jewel.value;

export default jewelSlice.reducer;
