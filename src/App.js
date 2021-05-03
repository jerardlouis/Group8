import './App.css';
import React, { useState } from 'react';
import Profile from './Profile';
import Main from './Main';
import Search from './Search';
import BookListing from './BookListing';
import Username from './Login';
import Loan from './Loan';
import Results from './Results.js'
import AddBook from './components/AddBook';

const fetch = require('node-fetch');

function App() {
  const [page, setpage] = useState(1);
  const [categories, setcategories] = useState([]);
  const [results, setresults] = useState([]);
  const [category, setcategory] = useState('none');
  const [booklisting, setbooklisting] = useState([
    'Python for beginners',
    '200',
    'its great',
  ]);
  const [status, setStatus] = useState('Not Logged In');
  function Clickhandler(book) {
    fetch(`/booksearch/Computer Science/${book}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setbooklisting(data[book]));
    console.log(booklisting);
    setpage(5);
  }
  function resulthandler(categorys) {
    console.log(categorys);
    fetch(`/booksearch/${categorys}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setresults(data.results));
    // console.log(results);
    setcategory(categorys);
    setpage(4);
  }
  function booklistinghandler(book) {
    fetch(`/booksearch/${category}/${book}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setbooklisting(data[book]));
      setpage(5)
  }
  function loanbook(){
    setpage(7);
  }
  function booksearch() {
    /* function that brings up categories of books when you click the magnifying glass
    on the main page */
    fetch('/booksearch', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setcategories(data.bookcategories));
    setpage(3);
  }
  function profileredirect() {
    setpage(2);
  }
  function mainredirect() {
    setpage(1);
  }
  function addbook() {
    console.log('click');
    setpage(6);
  }
  if (status === 'Not Logged In') return <Username function={setStatus} />;
  if (page === 1) {
    return (
      <div className="App">
        <Main
          booksearch={booksearch}
          profileredirect={profileredirect}
          Clickhandler={Clickhandler}
          loanbook = {loanbook}
          addbook={addbook}

        />
      </div>
    );
  }
  if (page === 3) {
    return (
      <div className="App">
        <Search bookcategories={categories} resulthandler = {resulthandler}/>
      </div>
    );
  }
  if (page === 4) {
    // if page is 3, results page
    return (
      <div className="App">
        <Results results={results}  booklistinghandler = {booklistinghandler} />
      </div>
    );
  }
  if (page === 2) {
    return (
      <div className="App">
        <Profile
          mainredirect={mainredirect}
          booksearch={booksearch}
          username={status}
        />
      </div>
    );
  }
  if (page === 5) {
    return (
      <div className="App">
        <BookListing
          username={status}
          booksearch={booksearch}
          booklisting={booklisting}
          profileredirect={profileredirect}
          mainredirect={mainredirect}
        />
      </div>
    );
  }
  if (page === 6) {
    return (
      <div className="App">
        <AddBook mainredirect={mainredirect} />
      </div>
    );
  }
  if (page === 7) {
    return (
      <div className="App">
        <Loan
        mainredirect={mainredirect}/>
      </div>
    );
  }
}
export default App;
