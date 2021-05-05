import './Main.css';
import './components/InterestedButton.css';
import React from 'react';
import PropTypes from 'prop-types';
import { InterestedButton } from './components/InterestedButton';

function pass() {}
const bookarr = ['No', 'Books', 'Here', 'Now'];

function BookListing(props) {
  const {
    username,
    booksearch,
    booklisting,
    profileredirect,
    mainredirect,
  } = props;
  const bookList = ['https://images-na.ssl-images-amazon.com/images/I/51iuMlvNUxL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51Tg8ICgkWL._SX373_BO1,204,203,200_.jpg', 'data:image/jpeg;base64,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', 'https://upload.wikimedia.org/wikipedia/commons/6/63/Textbook.JPG', 'https://www.cengage.com/covers/imageServlet?productISBN13=9780357114087&image_type=LRGFC&catalog=cengage'];
  const bookIcon = bookList[Math.random(bookList.length() - 1)];
  return (
    <div className="Main">
      <div className="Header">
        <h />
        <div
          onClick={mainredirect}
          role="button"
          tabIndex={0}
          onKeyPress={mainredirect}
        >
          <img
            alt="backbutton"
            className="backButton"
            src="https://static.thenounproject.com/png/344330-200.png"
            width="20"
            height="20"
          />
        </div>
        <div
          onClick={booksearch}
          role="button"
          tabIndex={0}
          onKeyPress={booksearch}
        >
          <img
            alt="search"
            className="searchIcon"
            src="https://cdn3.iconfinder.com/data/icons/instagram-18/512/194_Instagram_Search_Sets-512.png"
            width="20"
            height="20"
          />
        </div>
        <img
          alt="savebook"
          className="bookMark"
          src="https://pics.freeicons.io/uploads/icons/png/15746672971543238863-512.png"
          width="20"
          height="20"
        />
        <div
          onClick={profileredirect}
          role="button"
          tabIndex={0}
          onKeyPress={profileredirect}
        >
          <img
            alt="icon"
            className="icon"
            src="https://static.thenounproject.com/png/630740-200.png"
            width="20"
            height="20"
          />
        </div>
      </div>

      <div className="NewForYou">
        <h>{username}</h>
        <p className="seeAll">
          <img
            alt="review"
            src="https://cdn2.iconfinder.com/data/icons/celebration-and-party-8/96/star-512.png"
            width="15"
            height="15"
          />
          5 stars
        </p>
        <img
          alt="profile pic"
          src="https://static.thenounproject.com/png/630740-200.png"
          height="60"
          width="60"
        />
        <p>{booklisting[3]}</p>
      </div>
      <div className="Listing">
        <img alt="deathnote" src={bookIcon} height="300" />
        <h>
          Book Name:
          {booklisting[0]}
        </h>
        <p>
          Price:
          {booklisting[1]}
        </p>
        <p1>
          Description:
          {booklisting[2]}
        </p1>
        <br />
        <br />
        <p1>
          Location:
          {booklisting[3]}
        </p1>
        <div className="InterestedButton">
          <InterestedButton />
        </div>
      </div>
    </div>
  );
}

BookListing.propTypes = {
  mainredirect: PropTypes.func,
  booksearch: PropTypes.func,
  profileredirect: PropTypes.func,
  booklisting: PropTypes.array,
  username: PropTypes.string,
};
BookListing.defaultProps = {
  booksearch: pass(),
  profileredirect: pass(),
  mainredirect: pass(),
  booklisting: bookarr,
  username: 'none',
};

export default BookListing;
