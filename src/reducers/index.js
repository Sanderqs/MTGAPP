import { combineReducers } from "redux";

//Import Reducers
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
