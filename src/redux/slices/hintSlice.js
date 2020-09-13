import { createSlice } from "@reduxjs/toolkit";

// Creates the actions, reducers, and selectors for the global hint variable
// See https://redux.js.org/tutorials/essentials/part-1-overview-concepts
// See https://redux.js.org/tutorials/essentials/part-2-app-structure
export const hintSlice = createSlice({
  name: "hint",
  initialState: {
    value: false,
  },
  reducers: {
    openHint: (state) => {
      state.value = true;
    },
    closeHint: (state) => {
      state.value = false;
    },
  },
});

export const { openHint, closeHint } = hintSlice.actions;

export const selectHint = (state) => state.hint.value;

export default hintSlice.reducer;
