import { combineReducers } from "redux";

import landReducer from "./land";
import counterReducer from "./counter";
// import autoCompleteReducer from "./autoComplete";
import devotionReducer from "./devotion";
export default combineReducers({
  landReducer,
  counterReducer,

  devotionReducer,
});
