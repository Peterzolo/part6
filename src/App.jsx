import React from "react";
import Anecdote from "./components/anecdotes/Anecdote";
import AnecdoteForm from "./components/anecdotes/AnecdoteForm";

const App = () => {
  return (
    <div>
      <Anecdote />
      <AnecdoteForm />
    </div>
  );
};

export default App;
