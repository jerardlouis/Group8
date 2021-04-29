import React, { useState } from 'react';
import BookListing from './BookListing';

const fetch = require('node-fetch');

function Results(props) {
  const [booklisting, setbooklisting] = useState([]);
    return (
      <div className="Main">
        <h1>
          <ul>
            {props.results.map((x) => (
              <div
                onClick={() => props.booklistinghandler(x)}
                onKeyPress={() => props.booklistinghandler(x)}
                role="button"
                tabIndex={0}
              >
                <li>{x}</li>
              </div>
            ))}
          </ul>
        </h1>
      </div>
    );
  
}
export default Results;
