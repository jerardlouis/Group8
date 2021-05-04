import './App.css';
import React, { useState } from 'react';
import Results from './Results';

const fetch = require('node-fetch');

function Search(props) {
  // Renders the search page based on the categories from the database
  const [page, setpage] = useState(3);
  const [results, setresults] = useState([]);
  const [category, setcategory] = useState('none');
  function Clickhandler(categorys) {
    // console.log(categorys);
    fetch(`/booksearch/${categorys}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setresults(data.results));
    // console.log(results);
    setcategory(categorys);
    setpage(4);
  }
  if (page === 3) {
    return (
      <div className="search-page">
        <h2>Select the Category of books</h2>
        {props.bookcategories.map((x) => (
          <div className="search-field">
            <button
              onClick={() => Clickhandler(x)}
              type="button"
              tabIndex={0}
              onKeyPress={() => Clickhandler(x)}
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
  if (page === 4) {
    return (
      <Results results={results} category={category} />
      /*  <div className="Main">
      <h1>{<ul>{results.map(x => <li>{x}</li>)}</ul>}</h1>
      </div> */
    );
  }
}
export default Search;

// <ul>{results.map(x => <li>{x}</li>)}</ul>
