import { anecdotesAtStart } from "../../components/anecdotes/data";
import {
  ADD_ANECDOTE,
  FETCH_ANECDOTES,
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
    payload: anecdotes,
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
