/* eslint-disable indent */

// eslint-disable-next-line no-unused-vars
import { FETCH_ANECDOTES, VOTE_ANECDOTE } from "../../type/anecdotes";

const initialState = {
  anecdotes: [],
};

export const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANECDOTES:
      console.log("PAYLOAD", action.payload);
      return {
        ...state,
        anecdotes: action.payload,
      };
    default:
      return state;
  }
};
