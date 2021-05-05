import React from 'react';

// to get lint to work

function Results(props) {
  return (
    <div className="result-page">
      <h2>
        Books result for
        {props.category}
      </h2>
      {props.results.map((x) => (
        <div className="book-list">
          <button
            onClick={() => props.booklistinghandler(x)}
            onKeyPress={() => props.booklistinghandler(x)}
            type="submit"
            tabIndex={0}
          >
            {x}
          </button>
        </div>
      ))}
    </div>
  );
}
export default Results;
