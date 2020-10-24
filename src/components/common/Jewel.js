import React, { useEffect } from "react";
import "../../css/Jewel.css";
import { IconButton, SvgIcon } from "@material-ui/core";
import $ from "jquery";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFound, setMoves } from "../../redux/slices/jewelSlice";
import {selectLevel} from "../../redux/slices/levelSlice";
import PropTypes from "prop-types";

// Component for the jewel that appears in every level
export default function Jewel(props) {
  // redux - allows methods to be called that save variables to global state
  const dispatch = useDispatch();
  const level = useSelector(selectLevel);

  // hook that allows jquery to be used to animate the jewel
  useEffect(() => {
    $(document).ready(function() {
      $(".jewel").click(function() {
        $(".animates").css("animation-play-state", "paused");
      });
    });
  });

  async function getMoves() {
      // makes an HTTP request to the logging server
      //url: "https://digital-skills-server.herokuapp.com/logging",
      if (level === 1) {
          dispatch(setMoves(["Navigated to the bottom of the page by scrolling down.", "Got the jewel by clicking on it."]))
      }
      if (level === 13) {
          dispatch(setMoves(["Learned how to respond to Mission Control by reading the response options.",
                                    "Changed you response by clicking on one of the responses.",
                                    "Learned Mission Control's response by reading it.",
                                    "Changed your response by typing in the chat box if prompted and click the send button.",
                                    "Got the jewel by clicking on it."]))
      }
      else {
          const response = await axios({
              method: "get",
              url: "http://localhost:8080/logging",
              params: {
                  level: level,
              },
          });
          if (response.status === 200) {
              dispatch(setMoves(response.data));
          } else {
              console.log("error");
          }
      }
  }

  // logs the click made by the user and calls the global state method to save that the jewel is found
  async function handleFound(e) {
    props.logClick(e, level);
    dispatch(setFound());
    await getMoves();
  }

  return (
    <IconButton
      id="Got the jewel by clicking on it."
      className="jewel"
      style={{
        margin: 0,
        position: "absolute",
        top: props.top,
        left: props.left,
      }}
      color="inherit"
      onClick={(e) => handleFound(e)}
    >
      <SvgIcon className="animates" viewBox="0 0 576 512">
        <path
          fill="currentColor"
          d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
        />
      </SvgIcon>
    </IconButton>
  );
}

// defines what props the component expects
Jewel.propTypes = {
    logClick: PropTypes.func,   // function that handles when the user clicks on the jewel
    top: PropTypes.string,      // string that specifies the jewel's offset from the top of the page
    left: PropTypes.string      // string that specifies the jewel's offset from the left side of the page
}
