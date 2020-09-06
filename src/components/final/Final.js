import React, { useState, useEffect } from "react";
import "../../css/Welcome.css";
import SpyLogo from "../../images/spyLogo.jpg";
import $ from "jquery";
import axios from "axios";

export default function Final(props) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    $(document).ready(function() {
      $("#congrats")
        .hide()
        .delay(3000)
        .fadeIn(100);
      $("#score")
        .hide()
        .delay(5000)
        .fadeIn(100);
      $("#learn")
        .hide()
        .delay(5005)
        .fadeIn(100);
    });
    axios.get("http://localhost:8080/logging").then((response) => {
      setScore(response.data);
    });
  });

  return (
    <div className="welcome">
      <h1 align="center">Congratulations Agent!</h1>
      <img className="app-logo" src={SpyLogo} alt="logo" />
      <br />
      <p id="congrats" className="congrats-text">
        You have successfully completed your missions!
      </p>
      <p id="score" className="score-text">
        Your Digital Skill Level is: {score}
      </p>
      <button
        id="learn"
        className="learn-btn"
        onClick={(event) => window.open("http://google.com", "_blank")}
      >
        Click Here to Learn More About Your Score
      </button>
    </div>
  );
}
