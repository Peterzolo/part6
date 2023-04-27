import React, { useState } from "react";
import { addAnecdoteAction } from "../../redux/actions/anecdoteAction";
import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const [newAnecdote, setNewAnecdote] = useState("");
  const dispatch = useDispatch();

  const handleAddAnecdote = (event) => {
    event.preventDefault();
    dispatch(addAnecdoteAction(newAnecdote));
    setNewAnecdote("");
  };

  return (
    <div>
      <form onSubmit={handleAddAnecdote}>
        <div>
          <input
            type="text"
            value={newAnecdote}
            onChange={(e) => setNewAnecdote(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
