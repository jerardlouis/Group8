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
      <div className="Main">
        <h1>
          <ul>
            {props.results.map((x) => (
              <div onClick={() => Clickhandler(x)} role="button" tabIndex={0}><li>{x}</li></div>
            ))}
          </ul>
        </h1>
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
