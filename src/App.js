import './App.css';
import React, { useState } from 'react';
import Profile from './Profile';
import Main from './Main';
import Search from './Search';
import BookListing from './BookListing';
import Username from './Login';
import AddBook from './components/AddBook';

const fetch = require('node-fetch');

function App() {
  const [page, setpage] = useState(1);
  const [categories, setcategories] = useState([]);
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
          addbook={addbook}
        />
      </div>
    );
  }
  if (page === 3) {
    return (
      <div className="App">
        <Search bookcategories={categories} />
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
}
export default App;
