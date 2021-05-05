import React from "react";

const fetch = require("node-fetch");

class AddBook extends React.Component {
  state = {
    name: "",
    price: "",
    desc: "",
  };

  handleAddBook = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/addbook", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
        "Access-Control-Request-Method": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        desc: this.state.desc,
      }),
    }).then((response) => {
      console.log(response);
    });
  };

  handlenameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlepriceChange = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  handledescChange = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <img
          className="backButton"
          alt="backbutton"
          onClick={this.props.mainredirect}
          src="https://static.thenounproject.com/png/344330-200.png"
          width="20"
          height="20"
        />
        Book Name:
        <br />
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handlenameChange}
        />
        <br />
        Price:
        <br />
        <input
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.handlepriceChange}
        />
        <br />
        <br />
        Description:
        <br />
        <input
          type="text"
          name="desc"
          value={this.state.desc}
          onChange={this.handledescChange}
        />
        <br />
        <button onClick={this.handleAddBook}>Add Book</button>
      </form>
    );
  }
}
export default AddBook;
