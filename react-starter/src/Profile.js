import './Main.css';

function Profile() {
  var bookIcon= "https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png";
  return (
    <div className="Main">
      <div className="Header">
      <h>Back Button Goes Here</h>
      <img className="searchIcon" src="https://cdn3.iconfinder.com/data/icons/instagram-18/512/194_Instagram_Search_Sets-512.png" width="20" height="20"/>
      <img className="bookMark" src="https://pics.freeicons.io/uploads/icons/png/15746672971543238863-512.png" width="20" height="20"/>
      <img className="icon" src= "https://static.thenounproject.com/png/630740-200.png" width="20" height="20"/>
      
      </div>

      <div className="NewForYou">
      <h>USERNAME</h>
      <p className="seeAll"><img src="https://cdn2.iconfinder.com/data/icons/celebration-and-party-8/96/star-512.png" width="15" height="15"/>5 stars</p>
      <img src="https://static.thenounproject.com/png/630740-200.png" height="60" width="60"/>
      <p>
      LOCATION
      </p>
      </div>
      <div className="feedHeader">
      <h> Books by USERNAME </h>
      </div>
      <div className="bookFeed">
      
      <img className="img1" src={bookIcon} height="100" width="100"/>
      <img className="img2" src={bookIcon} height="100" width="100"/>
      <img className="img3" src={bookIcon} height="100" width="100"/>
      <img className="img4" src={bookIcon} height="100" width="100"/>
      </div>
    </div>
  );
}

export default Profile;
