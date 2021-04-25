import "./Main.css";
import "./components/InterestedButton.css";
import React from "react";
import PropTypes from "prop-types";
import { InterestedButton } from "./components/InterestedButton";

function pass() {}
const bookarr = ["No", "Books", "Here", "Now"];

function BookListing(props) {
  const {
    username,
    booksearch,
    booklisting,
    profileredirect,
    mainredirect,
  } = props;
  const bookIcon =
    "https://images-na.ssl-images-amazon.com/images/I/71Pryq-7E-L._SL1012_.jpg";
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
        <p>LOCATION</p>
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
  username: "none",
};

export default BookListing;
