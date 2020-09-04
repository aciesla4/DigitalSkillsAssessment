import * as types from "./actionTypes";

export function updateMode(mode) {
  return { type: types.UPDATE_MODE, mode };
}
