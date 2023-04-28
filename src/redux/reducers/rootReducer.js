import { combineReducers } from "redux";
import counterReducer from "./counter/counter";
import {
  anecdoteReducer,
  filterAnecdoteReducer,
} from "./anecdote/anecdoteReducer";

const rootReducers = combineReducers({
  counter: counterReducer,
  anecdotes: anecdoteReducer,
  filter: filterAnecdoteReducer,
});

export default rootReducers;
