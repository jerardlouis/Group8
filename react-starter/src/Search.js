import './App.css';
function Search(props){
    //Renders the search page based on the categories from the database
    return(
        <div className="Main">
      <ul>{props.bookcategories.map(x => <li>{x}</li>)}</ul>
      </div>
    );  
}
export default Search