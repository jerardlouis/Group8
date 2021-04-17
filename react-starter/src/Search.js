import './App.css';
import React, { useState } from 'react';
import Results from './Results.js'
const fetch = require("node-fetch");

function Search(props){
    //Renders the search page based on the categories from the database
const [page, setpage] = useState(3);
const [results, setresults] = useState([])
    function Clickhandler(category){
        console.log(category);
        fetch('/booksearch/' + category, {method : 'GET'}).then(response => response.json()).then(data => setresults(data["results"]));
        //console.log(results);
        setpage(4)
    }
    if(page == 3){
    return(
        <div className="Main">
      <ul>{props.bookcategories.map(x => <li onClick={() => Clickhandler(x)}>{x}</li>)}</ul>
      </div>
    );  
    }
    if (page == 4)
     return(
         <Results results = {results}/>
      /*  <div className="Main">
      <h1>{<ul>{results.map(x => <li>{x}</li>)}</ul>}</h1>
      </div>*/
    );
}
export default Search

//<ul>{results.map(x => <li>{x}</li>)}</ul>