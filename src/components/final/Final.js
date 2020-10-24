import React, { useState, useEffect } from "react";
import "../../css/Welcome.css";
import SpyLogo from "../../images/spyLogo.jpg";
import $ from "jquery";
import axios from "axios";

// Component for the page the user sees after finishing all the levels
export default function Final(props) {
  // local state for the score the user receives
  const [time, setTime] = useState(0);

  // hook that allows jquery to be used to animate the buttons appearing and calling the API that generates the score
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
      // axios.get("http://localhost:8080/logging/score").then((response) => {
      //     console.log(response.data);
      //     setTime(response.data);
      // });
  });

  return (
    <div className="welcome">
      <h1 align="center">Congratulations Agent!</h1>
      <img className="app-logo" src={SpyLogo} alt="logo" />
      <br />
      <p id="congrats" className="congrats-text">
        You have successfully completed your missions!
      </p>
      <button
          id="learn"
          className="learn-btn"
          onClick={() => {window.location.href = "/";}}
      >
          Click Here to Play Again
      </button>
    </div>
  );
}

/*
      <p id="time" className="score-text">
        Total Time Taken: {time}
      </p>
      <button
        id="learn"
        className="learn-btn"
        onClick={(event) => window.open("http://google.com", "_blank")}
      >
        Click Here to Learn More About Your Score
      </button>
 */
