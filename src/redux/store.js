import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdote/anecdoteReducer";

const store = configureStore({
  reducer: anecdoteReducer,
});

export default store;
