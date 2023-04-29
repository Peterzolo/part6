import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getId } from "../../redux/reducers/anecdote/anecdoteReducer";
import { showSuccess } from "../../redux/reducers/notification/notificationReducer";

import { createAnecdoteAction } from "../../redux/actions/anecdoteAction";

const AnecdoteForm = () => {
  const [newAnecdote, setNewAnecdote] = useState("");
  const dispatch = useDispatch();

  const handleAddAnecdote = async (event) => {
    event.preventDefault();

    const anecdoteObject = {
      content: newAnecdote,
      id: getId(),
      votes: 0,
    };

    try {
      dispatch(createAnecdoteAction(anecdoteObject));
      setTimeout(() => {
        dispatch(showSuccess(`Added anecdote "${anecdoteObject.content}"`));
      }, 1000);
      setNewAnecdote("");
    } catch (error) {
      console.error(error);
    }
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
