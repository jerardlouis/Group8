import './App.css';

const fetch = require('node-fetch');

function Loan(props){
 function formSubmit(){
  props.mainredirect()

 }
 //>
 return (
     <div className = "Main">
     <h1> Loan a Book! </h1>
     <button onClick = {formSubmit}>Back</button>
 <form action = "/loan" method = "POST"> 
 <label for="username">user:</label><br/>
  <input type="text" id="username" name="username" value = {props.Username} /><br/><br/> 
  <label for="bookname">Book name:</label><br/>
  <input type="text" id="bookname" name="bookname" /><br/><br/>
  <label for="price">Price:</label><br/><br/>
  <input type="text" id="price" name="price"  /><br/><br/>
  <label for="condition">Condition:</label><br/>
  <input type="text" id="condition" name="condition"  /><br/><br/>
  <label for="location">Location:</label><br/>
  <input type="text" id="location" name="location"  /><br/><br/>
  <label for="category">Category:</label><br/>
  <input type="text" id="category" name="category"  /><br/><br/>
  <input type="submit" value="Submit"/>
</form>
</div>
 );
}

export default Loan;