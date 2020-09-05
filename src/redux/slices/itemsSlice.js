import { createSlice } from "@reduxjs/toolkit";

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
