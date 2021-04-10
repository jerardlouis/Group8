import './Main.css';

function Main() {
  var bookIcon= "https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png";
  return (
    <div className="Main">
      <div className="Header">
      <h>Books</h>
      <img className="searchIcon" src="https://cdn3.iconfinder.com/data/icons/instagram-18/512/194_Instagram_Search_Sets-512.png" width="20" height="20"/>
      <img className="bookMark" src="https://pics.freeicons.io/uploads/icons/png/15746672971543238863-512.png" width="20" height="20"/>
      <img className="icon" src= "https://static.thenounproject.com/png/630740-200.png" width="20" height="20"/>
      
      </div>
      <div className="HeaderButtons">
      <button class="button">Loan Book</button>
      <button class="button">Categories</button>
      </div>
      
      <div className="NewForYou">
      <h>New for you</h>
      <p className="seeAll">See all (5)</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" height="60" width="60"/>
      <p>
      Bob replied to your message about his listing: Calc 2, used
      </p>
      <p className="daysAgo"> 1 day ago </p>
      </div>
      <div className="feedHeader">
      <h> Today's picks </h>
      <p> Newark </p>
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

export default Main;
