import { combineReducers } from "redux";

import landReducer from "./land";
import cardReducer from "./card";

export default combineReducers({
  landReducer,
  cardReducer,
});
