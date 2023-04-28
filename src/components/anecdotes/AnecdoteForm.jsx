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
      <form className="form-wrap" onSubmit={handleAddAnecdote}>
        <input
          className="create-input"
          type="text"
          value={newAnecdote}
          placeholder="Enter content here ..."
          onChange={(e) => setNewAnecdote(e.target.value)}
        />

        <button className="create-btn">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
