import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function academicModeReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_ACADEMIC_MODE:
      //return action.mode;
      return {
        ...state,
        academicMode: !state.academicMode,
      };
    default:
      return state;
  }
}
