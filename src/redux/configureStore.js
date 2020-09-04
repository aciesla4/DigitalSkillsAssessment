import { configureStore } from "@reduxjs/toolkit";
import academicModeReducer from "./slices/academicModeSlice";
import levelReducer from "./slices/levelSlice";
import hintReducer from "./slices/hintSlice";

export default configureStore({
  reducer: {
    academicMode: academicModeReducer,
    level: levelReducer,
    hint: hintReducer,
  },
});
