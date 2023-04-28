import React from "react";
import Anecdote from "./components/anecdotes/Anecdote";
import AnecdoteForm from "./components/anecdotes/AnecdoteForm";
import FilterAnecdote from "./components/anecdotes/FilterAnecdote";

const App = () => {
  return (
    <div className="container">
      <h2>Anecdotes</h2>
      <FilterAnecdote />
      <Anecdote />
      <AnecdoteForm />
    </div>
  );
};

export default App;
