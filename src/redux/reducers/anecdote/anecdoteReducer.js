/* eslint-disable no-case-declarations */
/* eslint-disable indent */

// eslint-disable-next-line no-unused-vars
const getId = () => (100000 * Math.random()).toFixed(0);

import {
  ADD_ANECDOTE,
  FETCH_ANECDOTES,
  VOTE_ANECDOTE,
} from "../../type/anecdotes";

const initialState = {
  anecdotes: [],
};

export const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANECDOTES:
      return {
        ...state,
        anecdotes: action.payload,
      };
    case VOTE_ANECDOTE:
      const id = action.data.id;
      const anecdoteToVote = state.anecdotes.find(
        (anecdote) => anecdote.id === id
      );
      const updatedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };
      return {
        ...state,
        anecdotes: state.anecdotes
          .map((anecdote) => (anecdote.id !== id ? anecdote : updatedAnecdote))
          .sort((a, b) => b.votes - a.votes),
      };

    case ADD_ANECDOTE:
      const newAnecdote = {
        id: getId(),
        content: action.data.content,
        votes: 0,
      };
      return {
        ...state,
        anecdotes: [...state.anecdotes, newAnecdote],
      };

    default:
      return state;
  }
};
