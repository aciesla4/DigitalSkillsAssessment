import { createSlice } from "@reduxjs/toolkit";

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
