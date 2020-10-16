import { createSlice } from "@reduxjs/toolkit";

// Creates the actions, reducers, and selectors for the global jewel variable
// See https://redux.js.org/tutorials/essentials/part-1-overview-concepts
// See https://redux.js.org/tutorials/essentials/part-2-app-structure
export const jewelSlice = createSlice({
  name: "jewel",
  initialState: {
    value: false,
    moves: [],
  },
  reducers: {
    setFound: (state) => {
      state.value = !state.value;
    },
    setMoves: (state, moves) => {
      state.moves = moves;
    },
  },
});

export const { setFound, setMoves } = jewelSlice.actions;

export const selectJewel = (state) => state.jewel.value;

export const selectMoves = (state) => state.jewel.moves;

export default jewelSlice.reducer;
