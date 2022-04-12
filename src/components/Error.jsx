import React from "react";
import errorImage from "../assets/static/images/error.png";
import "../assets/styles/components/Error.scss";

const Error = () => (
  <div className="error">
    <img className="error-image" src={errorImage} alt="Morty scared" />
    <span className="error-text">Sorry, an error has ocurred.</span>
  </div>
);

export default Error;
