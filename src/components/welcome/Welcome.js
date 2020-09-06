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
      <h1 align="center">Hello Agent</h1>
      <img className="app-logo" src={SpyLogo} alt="logo" />
      <br />
      <button
        id="begin"
        className="begin-button"
        onClick={(event) => (window.location.href = "/home")}
      >
        Click Here to Begin
      </button>
    </div>
  );
}
