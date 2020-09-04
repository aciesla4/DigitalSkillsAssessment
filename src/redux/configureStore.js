import { configureStore } from "@reduxjs/toolkit";
import academicModeReducer from "./slices/academicModeSlice";
import levelReducer from "./reducers/levelReducer";
import hintReducer from "./reducers/hintReducer";

export default configureStore({
  reducer: {
    academicMode: academicModeReducer,
    level: levelReducer,
    hint: hintReducer,
  },
});
