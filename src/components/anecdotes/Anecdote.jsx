import React from "react";
import { useSelector } from "react-redux";

import "../anecdotes/Anecdotes.css";

const Anecdote = () => {
  const anecdotes = useSelector((state) => state.anecdotes);

  return (
    <div className="container">
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id} className="anecdote-wrapper">
          <div className="content">{anecdote.content}</div>
          <div className="vote-counts">
            has {anecdote.votes}
            <button className="vote-btn">vote</button>
            {/* <button onClick={() => vote(anecdote.id)}>vote</button> */}
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form>
        <div>
          <input />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default Anecdote;
