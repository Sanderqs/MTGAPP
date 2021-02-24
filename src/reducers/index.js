import { combineReducers } from "redux";

import landReducer from "./land";
import counterReducer from "./counter";
import devotionReducer from "./devotion";
import cardReducer from "./cardReducer";

export default combineReducers({
  landReducer,
  counterReducer,
  devotionReducer,
  cardReducer,
});
