import { anecdotesAtStart } from "../../components/anecdotes/data";
import {
  ADD_ANECDOTE,
  FETCH_ANECDOTES,
  FILTER_ANECDOTE,
  VOTE_ANECDOTE,
} from "../type/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};
const anecdotes = anecdotesAtStart.map(asObject);

export const fetchAnecdotes = () => {
  return {
    type: FETCH_ANECDOTES,
    payload: anecdotes.sort((a, b) => b.votes - a.votes),
  };
};

export const voteAnecdoteAction = (id) => {
  return {
    type: VOTE_ANECDOTE,
    data: {
      id,
    },
  };
};

export const addAnecdoteAction = (content) => {
  return {
    type: ADD_ANECDOTE,
    data: {
      content,
    },
  };
};

export const filterAnecdoteAction = (filter) => {
  return {
    type: FILTER_ANECDOTE,
    data: {
      filter,
    },
  };
};
