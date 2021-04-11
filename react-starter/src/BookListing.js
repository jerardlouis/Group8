import './Main.css';

function BookListing() {
  var bookIcon= "https://images-na.ssl-images-amazon.com/images/I/71Pryq-7E-L._SL1012_.jpg";
  return (
    <div className="Main">
      <div className="Header">
      <h></h>
      <img className="backButton" src="https://static.thenounproject.com/png/344330-200.png" width="20" height="20"/>
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
      <div className="Listing">
      <img src={bookIcon}height="300"/>
      <h>Book Name</h>
      <p>Price</p>
      <p1>Description</p1>
      <br/>
      <br/><p1>Location</p1>
      </div>
    </div>
  );
}

export default BookListing;
