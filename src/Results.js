import React, { useState } from 'react';
import BookListing from './BookListing';

const fetch = require('node-fetch');

function Results(props) {
  const [booklisting, setbooklisting] = useState([]);
  const [page, setpage] = useState(4);
  function Clickhandler(book) {
    fetch(`/booksearch/${props.category}/${book}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setbooklisting(data[book]));
    setpage(5);
  }
  if (page === 4) {
    return (
      <div className="result-page">
        <h2>
          Books result for
          {props.category}
        </h2>
        {props.results.map((x) => (
          <div className="book-list">
            <button
              onClick={() => Clickhandler(x)}
              onKeyPress={() => Clickhandler(x)}
              type="button"
              tabIndex={0}
            >
              {x}
            </button>
          </div>
        ))}
      </div>
    );
  }
  if (page === 5) {
    return (
      <div className="Main">
        <BookListing booklisting={booklisting} />
      </div>
    );
  }
}
export default Results;
