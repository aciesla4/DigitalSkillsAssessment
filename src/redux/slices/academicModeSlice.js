import { createSlice } from "@reduxjs/toolkit";

// Creates the actions, reducers, and selectors for the global academicMode variable
// See https://redux.js.org/tutorials/essentials/part-1-overview-concepts
// See https://redux.js.org/tutorials/essentials/part-2-app-structure
export const academicModeSlice = createSlice({
  name: "academicMode",
  initialState: {
    value: true,
  },
  reducers: {
    update: (state) => {
      state.value = !state.value;
    },
  },
});

export const { update } = academicModeSlice.actions;

export const selectAcademicMode = (state) => state.academicMode.value;

export default academicModeSlice.reducer;
