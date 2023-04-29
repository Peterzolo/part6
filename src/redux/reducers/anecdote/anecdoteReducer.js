import { createSlice } from "@reduxjs/toolkit";
import { anecdotesAtStart } from "../../../components/anecdotes/data";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = {
  anecdotes: anecdotesAtStart.map(asObject),
  filter: "",
};

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    fetchAnecdotes: (state) => {
      state.anecdotes.sort((a, b) => b.votes - a.votes);
    },
    voteAnecdote: (state, action) => {
      const id = action.payload.id;
      const anecdoteToVote = state.anecdotes.find(
        (anecdote) => anecdote.id === id
      );
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1;
      }
    },

    addAnecdote: (state, action) => {
      console.log("ACTION", action.payload);
      const newAnecdote = {
        id: getId(),
        content: action.payload.content,
        votes: 0,
      };
      console.log("kjkj", newAnecdote);
      state.anecdotes.push(newAnecdote);
    },
    filterAnecdote: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const { fetchAnecdotes, voteAnecdote, addAnecdote, filterAnecdote } =
  anecdotesSlice.actions;

export default anecdotesSlice.reducer;
