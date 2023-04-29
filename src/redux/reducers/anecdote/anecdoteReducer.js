import { createSlice } from "@reduxjs/toolkit";
// import { anecdotesAtStart } from "../../../components/anecdotes/data";

export const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

const initialState = {
  anecdotes: [],
  filter: "",
};

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    fetchAnecdotes: (state, action) => {
      state.anecdotes = action.payload;
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
      // const newAnecdote = {
      //   id: getId(),
      //   content: action.payload.content,
      //   votes: 0,
      // };
      // state.anecdotes.push(newAnecdote);
      state.content = action.payload;
    },
    filterAnecdote: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const { fetchAnecdotes, voteAnecdote, addAnecdote, filterAnecdote } =
  anecdotesSlice.actions;

export default anecdotesSlice.reducer;
