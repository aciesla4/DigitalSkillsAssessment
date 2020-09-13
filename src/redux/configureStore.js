import { configureStore } from "@reduxjs/toolkit";
import academicModeReducer from "./slices/academicModeSlice";
import levelReducer from "./slices/levelSlice";
import hintReducer from "./slices/hintSlice";
import itemsReducer from "./slices/itemsSlice";
import jewelReducer from "./slices/jewelSlice";

// Exposes the reducers to the source files
// Configures the store which is where global state is held
// See https://redux.js.org/tutorials/essentials/part-1-overview-concepts
export default configureStore({
  reducer: {
    academicMode: academicModeReducer,
    level: levelReducer,
    hint: hintReducer,
    items: itemsReducer,
    jewel: jewelReducer,
  },
});
