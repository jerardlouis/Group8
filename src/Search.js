import './App.css';
import React, { useState } from 'react';
import Results from './Results';

const fetch = require('node-fetch');

function Search(props) {
  // Renders the search page based on the categories from the database
  
  
    return (
      <div className="search-page">
        <h2>Select the Category of books</h2>
          {props.bookcategories.map((x) => (
          <div className = "search-field">
          <button 
              onClick={() => props.resulthandler(x)}
              role="button"
              tabIndex={0}
              >
             {' '}
              {x}
              {' '}

            </button>
            </div>
        ))}

      </div>
    );
  
 
}
export default Search;

// <ul>{results.map(x => <li>{x}</li>)}</ul>
