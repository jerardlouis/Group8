import './App.css';
import React from 'react';

function Loan(props) {
  function formSubmit() {
    props.mainredirect();
  }
  // to get lint to work

  return (
    <div className="Main">
      <h1> Loan a Book! </h1>
      <button type="submit" onClick={formSubmit}>Back</button>
      <form action="/loan" method="POST">
        <label htmlFor="username">user:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={props.Username}
        />
        <br />
        <br />
        <label htmlFor="bookname">Book name:</label>
        <br />
        <input type="text" id="bookname" name="bookname" />
        <br />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <br />
        <input type="text" id="price" name="price" />
        <br />
        <br />
        <label htmlFor="condition">Condition:</label>
        <br />
        <input type="text" id="condition" name="condition" />
        <br />
        <br />
        <label htmlFor="location">Location:</label>
        <br />
        <input type="text" id="location" name="location" />
        <br />
        <br />
        <label htmlFor="category">Category:</label>
        <br />
        <input type="text" id="category" name="category" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Loan;
