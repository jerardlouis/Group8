import emailjs from "emailjs-com";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./InterestedPage.css";

require("dotenv").config();

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default class InterestedPage extends Component {
  state = {
    showMessage: false,
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: true });
  };

  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, "BookBusterGMAIL", e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.sendEmail}>
            <div className="SingleItem">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="name"
                placeholder="Enter your name please ..."
                name="name"
              />
            </div>
            <div className="SingleItem">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="Email"
                placeholder="Enter your email please ..."
                name="email"
              />
            </div>
            <div className="SingleItem">
              <label htmlFor="subject">Book Title</label>
              <input
                type="text"
                className="Subject"
                placeholder="Enter the book title please ..."
                name="subject"
              />
            </div>
            <div className="SingleItem">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                className="Message"
                placeholder="Enter your message please ..."
                name="message"
              />
            </div>
            <div className="msg"></div>
            <div className="btn">
              {this.state.showMessage && <p>Request has been Submitted!</p>}
              <button onClick={this.onButtonClickHandler} type="submit">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
