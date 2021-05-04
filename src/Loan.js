import './App.css';

const fetch = require('node-fetch');

function Loan(props){
 function formSubmit(){
  props.mainredirect()
 
 let data = {bookname : document.getElementById('bookname').value,
  price : document.getElementById('price').value,
  condition : document.getElementById('condition').value,
location : document.getElementById('location').value,
  category : document.getElementById('category').value
  }
   fetch(`/loan`, { method: 'POST', body: data })
      //.then((response) => response.json())
      //.then((data) => setbooklisting(data[book]));
    //console.log(booklisting);
 
 console.log(data);
 }
 return (
     <div className = "Main">
     <h1> Loan a Book! </h1>
 <form onSubmit = {formSubmit}>
  <label for="bookname">Book name:</label><br/>
  <input type="text" id="bookname" name="fname" /><br/><br/>
  <label for="price">Price:</label><br/><br/>
  <input type="text" id="price" name="lname"  /><br/><br/>
  <label for="condition">Condition:</label><br/>
  <input type="text" id="condition" name="lname"  /><br/><br/>
  <label for="location">Location:</label><br/>
  <input type="text" id="location" name="lname"  /><br/><br/>
  <label for="category">Category:</label><br/>
  <input type="text" id="category" name="lname"  /><br/><br/>
  <input type="submit" value="Submit" />
</form >
</div>
 );
}

export default Loan;