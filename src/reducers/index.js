import { combineReducers } from "redux";

import landReducer from "./land";
import counterReducer from "./counter";
import devotionReducer from "./devotion";

export default combineReducers({
  landReducer,
  counterReducer,
  devotionReducer,
});
