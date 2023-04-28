import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAnecdoteAction,
  voteAnecdoteAction,
} from "../../redux/actions/anecdoteAction";

const FilterAnecdote = () => {
  const dispatch = useDispatch();
  const { anecdotes } = useSelector((state) => state.anecdotes);
  console.log("ANECDOTES", anecdotes);
  const filter = useSelector((state) => state.filter);

  const handleVote = (id) => {
    dispatch(voteAnecdoteAction(id));
  };

  const handleChange = (event) => {
    dispatch(filterAnecdoteAction(event.target.value));
    console.log("EVENT", event.target.value);
  };

  return (
    <div className="container">
      <div>
        <input type="text" value={filter} onChange={handleChange} />

        {anecdotes
          .filter(
            (anecdote) => anecdote.content && anecdote.content.includes(filter)
          )
          .map((anecdote) => (
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
    </div>
  );
};

export default FilterAnecdote;
