import './App.css';
import Profile from './Profile.js';
import Main from './Main.js';
import Search from './Search.js'
import React, { useState } from 'react';
import BookListing from './BookListing.js';
import Login from './Login'
const fetch = require("node-fetch");

function App() {
  const [page, setpage] = useState(1);
  const [categories, setcategories] = useState([])
  const [booklisting, setbooklisting] = useState(["Python for beginners","200","its great"])
  const [status, setStatus] = useState('Not Logged In');
  function Clickhandler(book)
     {
          fetch('/booksearch/' + 'Computer Science' + '/' + book, {method : 'GET'}).then(response => response.json()).then(data => setbooklisting(data[book]));
          console.log(booklisting);
          setpage(5);
     }
     
  function booksearch(){
    /*function that brings up categories of books when you click the magnifying glass
    on the main page*/
     fetch('/booksearch',{
     method: 'GET'
    }).then(response => response.json()).then(data => setcategories(data["bookcategories"]))
    setpage(3);
  }
  function profileredirect(){
    setpage(2);
  }
  function mainredirect(){
    setpage(1);
  }
  if (status === 'Not Logged In')
  return <Login function = {setStatus}/>
  if (page === 1){  //If page is 1, main page
  return (
    <div className="App">
     <Main booksearch = {booksearch} profileredirect = {profileredirect} Clickhandler = {Clickhandler}/>
     
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
  if (page === 2){    //if page is 3, search page
    return (
    <div className="App">
      <Profile mainredirect = {mainredirect} booksearch = {booksearch} username = {status}/>
    </div>
  );
  }
  if (page === 5){    //if page is 3, search page
    return (
    <div className="App">
      <BookListing username = {status} booksearch = {booksearch} booklisting = {booklisting} profileredirect = {profileredirect} mainredirect = {mainredirect}/>
    </div>
  );
  }
}
export default App;
