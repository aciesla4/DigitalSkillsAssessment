import { createSlice } from "@reduxjs/toolkit";

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
