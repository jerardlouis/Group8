import './App.css';
import Profile from './Profile.js';
import Main from './Main.js';
import Search from './Search.js'
import React, { useState } from 'react';
import BookListing from './BookListing.js';
const fetch = require("node-fetch");

function App() {
  const [page, setpage] = useState(1);
  const [categories, setcategories] = useState([])
  
  function booksearch(){
    /*function that brings up categories of books when you click the magnifying glass
    on the main page*/
     fetch('/booksearch',{
     method: 'GET'
    }).then(response => response.json()).then(data => setcategories(data["bookcategories"]))
    setpage(3);
  }
  if (page === 1){  //If page is 1, main page
  return (
    <div className="App">
     <Main booksearch = {booksearch}/>
     
    </div>
  );
  }
  if (page === 3){    //if page is 3, search page
    return (
    <div className="App">
      <Search bookcategories={categories}/>
    </div>
  );
  }
}
export default App;
