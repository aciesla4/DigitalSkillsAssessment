import { createSlice } from "@reduxjs/toolkit";

export const levelSlice = createSlice({
  name: "level",
  initialState: {
    value: 1,
  },
  reducers: {
    changeLevel: (state) => {
      console.log(state.value);
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
