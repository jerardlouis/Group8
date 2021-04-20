import React from "react";
import { Link } from "react-router-dom";
import "./InterestedButton.css";

export const InterestedButton = () => {
  //const handleOnClick = () => history.push('/interestedpage');
  return (
    <Link to="/InterestedPage">
      <button>Interested?</button>
    </Link>
  );
};
