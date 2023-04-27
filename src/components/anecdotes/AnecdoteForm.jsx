import React from "react";

const AnecdoteForm = ({ handleAddAnecdote, setNewAnecdote, newAnecdote }) => {
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
