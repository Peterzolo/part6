import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../anecdotes/Anecdotes.css";
import {
  addAnecdoteAction,
  fetchAnecdotes,
  voteAnecdoteAction,
} from "../../redux/actions/anecdoteAction";
import AnecdoteForm from "./AnecdoteForm";

const Anecdote = () => {
  const { anecdotes } = useSelector((state) => state.anecdotes);

  console.log("ANECDOTES", typeof anecdotes);

  const [newAnecdote, setNewAnecdote] = useState("");
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(voteAnecdoteAction(id));
  };

  const handleAddAnecdote = (event) => {
    event.preventDefault();
    dispatch(addAnecdoteAction(newAnecdote));
    setNewAnecdote("");
  };

  useEffect(() => {
    dispatch(fetchAnecdotes());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Anecdotes</h2>

      <div>
        {anecdotes.map((anecdote) => (
          <div key={anecdote.id} className="anecdote-wrapper">
            <div className="content">{anecdote.content}</div>
            <div className="vote-counts-wrap">
              has <span className="count"> {anecdote.votes} </span>
              <button
                className="vote-btn"
                onClick={() => handleVote(anecdote.id)}
              >
                vote
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2>create new</h2>
      <AnecdoteForm
        handleAddAnecdote={handleAddAnecdote}
        setNewAnecdote={setNewAnecdote}
        newAnecdote={newAnecdote}
      />
    </div>
  );
};

export default Anecdote;
