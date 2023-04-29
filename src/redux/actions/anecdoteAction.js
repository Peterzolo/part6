import { createAnecdote } from "../../services/anecdoteService";
import { getAllAnecdotes } from "../../services/anecdoteService";
import { addAnecdote } from "../reducers/anecdote/anecdoteReducer";
import { fetchAnecdotes } from "../reducers/anecdote/anecdoteReducer";

export const fetchInitialAnecdotes = () => {
  return async (dispatch) => {
    const response = await getAllAnecdotes();
    dispatch(fetchAnecdotes(response));
  };
};

export const createAnecdoteAction = (dataObject) => {
  return async (dispatch) => {
    const response = await createAnecdote(dataObject);
    dispatch(addAnecdote(response));
  };
};
