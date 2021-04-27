import { useEffect, useState } from 'react';
import './Main.css';
import PropTypes from 'prop-types';
import React from 'react';

const fetch = require("node-fetch")

function Main(props) {
  var bookIcon= "https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png";
   const [booksData, setBooksData] = useState([])

    useEffect(() => {
    fetch('http://localhost:8081/books', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
        'Access-Control-Request-Method': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      },
    }).then(response => response.json()).then(
      response => {
        setBooksData(response);
      });
  }, [])

  let size_books = booksData.length;
  const renderBooks = () => {
    let book_html = []
    console.log("called")
    // Outer loop to create parent
    // let size_books = booksData.length;
    let size_books = 5;
    while (size_books--) {
      let book_one = <img className="img2" src={bookIcon} onClick={() => props.Clickhandler("Python for beginners")} height="100" width="100" />;
      book_html.push(book_one);
    }
    return book_html
  }
  return (
    <div className="Main">
      <div className="Header">
      <h>Books</h>
      <img className="add" onClick = {props.addbook}src="https://img.icons8.com/metro/452/plus.png" width="20" height="20"/>
      <img className="searchIcon" onClick = {props.booksearch}src="https://cdn3.iconfinder.com/data/icons/instagram-18/512/194_Instagram_Search_Sets-512.png" width="20" height="20"/>
      <img className="bookMark" src="https://pics.freeicons.io/uploads/icons/png/15746672971543238863-512.png" width="20" height="20"/>
      <img className="icon" onClick = {props.profileredirect} src= "https://static.thenounproject.com/png/630740-200.png" width="20" height="20"/>
  
      </div>
      <div className="HeaderButtons">
        <button type="submit" className="button">
          Loan Book
        </button>
        <button type="submit" className="button">
          Categories
        </button>
      </div>

      <div className="NewForYou">
        <h>New for you</h>
        <p className="seeAll">See all (5)</p>
        <img
          alt="book"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png"
          height="60"
          width="60"
        />
        <p>Bob replied to your message about his listing: Calc 2, used</p>
        <p className="daysAgo"> 1 day ago </p>
      </div>
      <div className="feedHeader">
        <h> Today&apos;s picks </h>
        <p> Newark </p>
      </div>
      <div className="bookFeed">
      
      {/*<img className="img1" src={bookIcon} onClick={() => props.Clickhandler("Python for beginners")} height="100" width="100"/>
      <img className="img2" src={bookIcon} onClick={() => props.Clickhandler("Python for beginners")} height="100" width="100"/>
      <img className="img3" src={bookIcon} onClick={() => props.Clickhandler("Python for beginners")} height="100" width="100"/>
      <img className="img4" src={bookIcon} onClick={() => props.Clickhandler("Python for beginners")} height="100" width="100"/>*/}
        {renderBooks()}

      </div>
    </div>
  );
}

Main.propTypes = {
  booksearch: PropTypes.func,
  profileredirect: PropTypes.func,
  Clickhandler: PropTypes.func,
};
Main.defaultProps = {
  booksearch: pass(),
  profileredirect: pass(),
  Clickhandler: pass(),
};

export default Main;
