import "./Main.css";
import PropTypes from "prop-types";
import React from "react";

function pass() {}
function Profile(props) {
  const { mainredirect, booksearch, username } = props;
  const bookIcon =
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png";
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
          alt="save book"
          className="bookMark"
          src="https://pics.freeicons.io/uploads/icons/png/15746672971543238863-512.png"
          width="20"
          height="20"
        />
        <img
          alt="profile icon"
          className="icon"
          src="https://static.thenounproject.com/png/630740-200.png"
          width="20"
          height="20"
        />
      </div>

      <div className="NewForYou">
        <h>{username}</h>
        <p className="seeAll">
          <img
            alt="leave a review"
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
      <div className="feedHeader">
        <h> Books by: </h>
        <h>{username}</h>
      </div>
      <div className="bookFeed">
        <img
          alt="book1"
          className="img1"
          src={bookIcon}
          height="100"
          width="100"
        />
        <img
          alt="book2"
          className="img2"
          src={bookIcon}
          height="100"
          width="100"
        />
        <img
          alt="book3"
          className="img3"
          src={bookIcon}
          height="100"
          width="100"
        />
        <img
          alt="book4"
          className="img4"
          src={bookIcon}
          height="100"
          width="100"
        />
      </div>
    </div>
  );
}

Profile.propTypes = {
  booksearch: PropTypes.func,
  mainredirect: PropTypes.func,
  username: PropTypes.string,
};
Profile.defaultProps = {
  booksearch: pass(),
  mainredirect: pass(),
  username: "None",
};

export default Profile;
