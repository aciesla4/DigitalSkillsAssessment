import React, { useEffect } from "react";
import "../../css/Welcome.css";
import SpyLogo from "../../images/spyLogo.jpg";
import $ from "jquery";
import axios from "axios";

// Component for the first page that the user sees when opening the app
export default function Welcome(props) {
    // hook that allows jquery to be used to animate the buttons
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
        onClick={(event) => {
            const dt = new Date().getTime();
            // makes an HTTP request to the logging server
            axios({
                method: "post",
                url: "http://localhost:8080/logging/startTime",
                data: {
                    startTime: dt,
                },
            });
            window.location.href = "/level1"
        }}
      >
        Click Here to Begin
      </button>
    </div>
  );
}
