import React from "react";
import { Link } from "react-router-dom";
import "./InterestedButton.css";

export const InterestedButton = () => (
  // const handleOnClick = () => history.push('/interestedpage');
  <Link to="/InterestedPage">
    <button type="submit">Interested?</button>
  </Link>
);
export default InterestedButton;
