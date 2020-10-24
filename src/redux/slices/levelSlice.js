import { createSlice } from "@reduxjs/toolkit";

// Creates the actions, reducers, and selectors for the global level variable
// See https://redux.js.org/tutorials/essentials/part-1-overview-concepts
// See https://redux.js.org/tutorials/essentials/part-2-app-structure
export const levelSlice = createSlice({
  name: "level",
  initialState: {
    value: 1,
  },
  reducers: {
    changeLevel: (state) => {
      if (state.value === 16) {
        window.location.href = "/congrats";
      } else {
        state.value = state.value + 1;
      }
    },
  },
});

export const { changeLevel } = levelSlice.actions;

export const selectLevel = (state) => state.level.value;

export default levelSlice.reducer;
