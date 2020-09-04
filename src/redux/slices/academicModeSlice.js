import { createSlice } from "@reduxjs/toolkit";

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
