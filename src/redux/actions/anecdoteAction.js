import { getAllAnecdotes } from "../../services/anecdoteService";
import { fetchAnecdotes } from "../reducers/anecdote/anecdoteReducer";

export const fetchInitialAnecdotes = () => {
  return async (dispatch) => {
    const response = await getAllAnecdotes();
    dispatch(fetchAnecdotes(response));
  };
};
