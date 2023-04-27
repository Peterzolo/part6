import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../anecdotes/Anecdotes.css";
import { fetchAnecdotes } from "../../redux/actions/anecdoteAction";

const Anecdote = () => {
  const { anecdotes } = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

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
              <button className="vote-btn">vote</button>
              {/* <button onClick={() => vote(anecdote.id)}>vote</button> */}
            </div>
          </div>
        ))}
      </div>

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
