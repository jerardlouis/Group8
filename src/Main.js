import "./Main.css";
import PropTypes from "prop-types";
import React from "react";

function pass() {}
function Main(props) {
  const { booksearch, profileredirect, Clickhandler } = props;
  const bookIcon =
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png";
  return (
    <div className="Main">
      <div className="Header">
        <h>Books</h>
        <div
          onClick={booksearch}
          role="button"
          tabIndex={0}
          onKeyPress={booksearch}
        >
          <img
            alt="searchIcon"
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
            alt="profile"
            className="icon"
            src="https://static.thenounproject.com/png/630740-200.png"
            width="20"
            height="20"
          />
        </div>
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
        <div
          role="button"
          onClick={() => Clickhandler("Python for beginners")}
          tabIndex={0}
          onKeyPress={Clickhandler}
        >
          <img
            alt="book"
            className="img1"
            src={bookIcon}
            height="100"
            width="100"
          />
        </div>
        <div
          role="button"
          onClick={() => Clickhandler("Python for beginners")}
          tabIndex={0}
          onKeyPress={Clickhandler}
        >
          <img
            alt="book"
            className="img2"
            src={bookIcon}
            height="100"
            width="100"
          />
        </div>
        <div
          role="button"
          onClick={() => Clickhandler("Python for beginners")}
          tabIndex={0}
          onKeyPress={Clickhandler}
        >
          <img
            alt="book"
            className="img3"
            src={bookIcon}
            height="100"
            width="100"
          />
        </div>
        <div
          role="button"
          onClick={() => Clickhandler("Python for beginners")}
          tabIndex={0}
          onKeyPress={Clickhandler}
        >
          <img
            alt="book"
            className="img4"
            src={bookIcon}
            height="100"
            width="100"
          />
        </div>
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
