import './Main.css';

function Main() {
  return (
    <div className="Main">
      <div className="Header">
      <h>Books</h>
      <img className="searchIcon" src="https://cdn3.iconfinder.com/data/icons/instagram-18/512/194_Instagram_Search_Sets-512.png" width="20" height="20"/>
      <img className="icon" src= "https://static.thenounproject.com/png/630740-200.png" width="20" height="20"/>
      
      </div>
      <div className="HeaderButtons">
      <button class="button">Loan Book</button>
      <button class="button">Categories</button>
      </div>
    </div>
  );
}

export default Main;
