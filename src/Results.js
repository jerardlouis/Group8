import React, { useState } from 'react';
import BookListing from './BookListing';

const fetch = require('node-fetch');

function Results(props) {
  const [booklisting, setbooklisting] = useState([]);
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
export default Results;
