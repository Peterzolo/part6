import { combineReducers } from "redux";
import counterReducer from "./counter/counter";

const rootReducers = combineReducers({
  counter: counterReducer,
});

export default rootReducers;
