import './App.css';

function Loan(props){
 return (
     <div className = "Main">
     <h1> Loan a Book! </h1>
 <form>
  <label for="bookname">Book name:</label><br/>
  <input type="text" id="fname" name="fname" /><br/><br/>
  <label for="price">Price:</label><br/><br/>
  <input type="text" id="lname" name="lname"  /><br/><br/>
  <label for="condition">Condition:</label><br/>
  <input type="text" id="lname" name="lname"  /><br/><br/>
  <label for="location">Location:</label><br/>
  <input type="text" id="lname" name="lname"  /><br/><br/>
  <label for="category">Category:</label><br/>
  <input type="text" id="lname" name="lname"  /><br/><br/>
  <input type="submit" value="Submit" onClick = {props.mainredirect}/>
</form>
</div>
 );
}

export default Loan;