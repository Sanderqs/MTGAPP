import { combineReducers } from "redux";

import landReducer from "./land";
import counterReducer from "./counter";

export default combineReducers({
  landReducer,
  counterReducer,
});
