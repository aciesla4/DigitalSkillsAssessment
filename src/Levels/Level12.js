import React from "react";
import Level from "../components/common/Level";
import SimpleMap from "../components/level12/SimpleMap";
import PropTypes from "prop-types";

// Component for Level 12 - navigating a map
export default function Level12(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to an expanded view of the map by pinching and scrolling out.</li>
        <li>Navigate to the top of the map by clicking and dragging the map down.</li>
        <li>Learn where Copper Harbor is by clicking on the pins.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // handles logging when a marker on the map is clicked
  function logMapClick(id) {
    let e = {
      currentTarget: {
        id: "",
      },
    };
    e.currentTarget.id = id;
    props.logClick(e);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="find Copper Harbor on the map."
      hintMessage="You can scroll using the scroll wheel on your mouse and zoom in and out using the + and - buttons in the top left."
      dialogMessage="Your mission is complete! Maps can be navigating by zooming in and out and clicking and dragging. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        <SimpleMap logClick={props.logClick} logMapClick={logMapClick} />
      </div>
    </Level>
  );
}

// defines the props the component expects
Level12.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
