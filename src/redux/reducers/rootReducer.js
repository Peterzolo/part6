import { combineReducers } from "redux";
import counterReducer from "./counter/counter";
import { anecdoteReducer } from "./anecdote/anecdoteReducer";

const rootReducers = combineReducers({
  counter: counterReducer,
  anecdotes: anecdoteReducer,
});

export default rootReducers;
