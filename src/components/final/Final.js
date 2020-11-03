import React, { useEffect, useState } from "react";
import "../../css/Welcome.css";
import SpyLogo from "../../images/spyLogo.jpg";
import $ from "jquery";
import axios from "axios";

// Component for the page the user sees after finishing all the levels
export default function Final(props) {
  // local state for the score the user receives
  const [time, setTime] = useState(0);

  async function logEndTime() {
      const dt = new Date().getTime();
      // makes an HTTP request to the logging server
      await axios({
          method: "post",
          url: "https://digital-skills-server.herokuapp.com/time/gameEndTime",
          data: {
              endTime: dt,
          },
      });
  }

  // converts the toal time to minutes and seconds
  function convertToMin(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return (seconds === 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }

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
    logEndTime()
    axios({
        method: "get",
        url: "https://digital-skills-server.herokuapp.com/time/gameTotalTime"
    }).then(response => {
        console.log(response.data)
        setTime(convertToMin(response.data))
    })
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
          Total Time Taken: {time}
      </p>
      <button
          id="learn"
          className="learn-btn"
          onClick={() => {window.location.href = "https://forms.gle/d4Qu75My1gkSK7Hw7";}}
      >
          Click Here to Fill Out the Post Game Survey
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
