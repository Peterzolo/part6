import { anecdotesAtStart } from "../../components/anecdotes/data";
import { FETCH_ANECDOTES, VOTE_ANECDOTE } from "../type/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};
const anecdotes = anecdotesAtStart.map(asObject);

console.log("ANECDOTES", anecdotes);

export const fetchAnecdotes = () => {
  return {
    type: FETCH_ANECDOTES,
    payload: anecdotes,
  };
};

export const voteAnecdote = (id) => {
  return {
    type: VOTE_ANECDOTE,
    payload: id,
  };
};
