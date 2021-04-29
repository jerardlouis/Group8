import './App.css';
import React, { useState } from 'react';
import Results from './Results';

const fetch = require('node-fetch');

function Search(props) {
  // Renders the search page based on the categories from the database
  const [page, setpage] = useState(3);
  const [results, setresults] = useState([]);
  const [category, setcategory] = useState('none');
  
    return (
      <div className="Main">
        <ul>
          {props.bookcategories.map((x) => (
            <div
              onClick={() => props.resulthandler(x)}
              role="button"
              tabIndex={0}
              onKeyPress={() => props.resulthandler(x)}
            >
              <li>{x}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  
 
}
export default Search;

// <ul>{results.map(x => <li>{x}</li>)}</ul>
