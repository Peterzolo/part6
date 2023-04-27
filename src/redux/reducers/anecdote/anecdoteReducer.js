/* eslint-disable indent */

import { anecdotesAtStart } from "../../../components/anecdotes/data";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

export const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ANECDOTE":
      return [...state];
    case "VOTE_ANECDOTE":
      return [...state, state + 1];
  }

  return state;
};
