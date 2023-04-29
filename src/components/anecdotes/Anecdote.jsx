import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../anecdotes/Anecdotes.css";
import { voteAnecdote } from "../../redux/reducers/anecdote/anecdoteReducer";
import { fetchInitialAnecdotes } from "../../redux/actions/anecdoteAction";

const Anecdote = () => {
  // eslint-disable-next-line no-unused-vars
  const { anecdotes } = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const handleVote = (id) => {
    dispatch(voteAnecdote(id));
  };

  useEffect(() => {
    dispatch(fetchInitialAnecdotes());
  }, [dispatch]);

  return (
    <div className="container">
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Anecdote;
