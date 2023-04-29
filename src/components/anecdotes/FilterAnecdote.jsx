import { useDispatch, useSelector } from "react-redux";
import {
  filterAnecdote,
  voteAnecdote,
} from "../../redux/reducers/anecdote/anecdoteReducer";

const FilterAnecdote = () => {
  const dispatch = useDispatch();
  const { anecdotes } = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.anecdotes.filter);

  const handleVote = (id) => {
    dispatch(voteAnecdote({ id }));
  };

  const handleChange = (event) => {
    dispatch(filterAnecdote({ filter: event.target.value }));
  };

  // sort anecdotes by vote count before rendering
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="container">
      <div>
        <div className="filter-wrap">
          <input
            className="filter-input"
            placeholder="Enter your search query ..."
            type="text"
            value={filter}
            onChange={handleChange}
          />
        </div>

        {sortedAnecdotes
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
