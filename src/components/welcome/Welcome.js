import React, { useEffect } from "react";
import "../../css/Welcome.css";
import SpyLogo from "../../images/spyLogo.jpg";
import $ from "jquery";

export default function Welcome(props) {
  useEffect(() => {
    $(document).ready(function() {
      $("#begin")
        .hide()
        .delay(3000)
        .fadeIn(100);
    });
  });

  return (
    <div className="welcome">
      <h1 align="center">Welcome Agent</h1>
      <img className="app-logo" src={SpyLogo} alt="logo" />
      <br />
      <h3 align="center">
        Thank you for joining the Spy Academy. You will be given a set of
        missions to complete that will help us learn more about computers and
        the internet.
      </h3>
      <button
        id="begin"
        className="begin-button"
        onClick={(event) => (window.location.href = "/level1")}
      >
        Click Here to Begin
      </button>
    </div>
  );
}
