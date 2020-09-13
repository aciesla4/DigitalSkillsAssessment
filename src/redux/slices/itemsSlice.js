import { createSlice } from "@reduxjs/toolkit";

// Creates the actions, reducers, and selectors for the global items variable used in levels 7 and 8
// See https://redux.js.org/tutorials/essentials/part-1-overview-concepts
// See https://redux.js.org/tutorials/essentials/part-2-app-structure
export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
  },
  reducers: {
    updateItems: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateItems } = itemsSlice.actions;

export const selectItems = (state) => state.items.value;

export default itemsSlice.reducer;
