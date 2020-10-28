import React, { useState } from "react";
import "../css/Level15.css";
import GoogleDrive from "../images/googleDrive.jpg";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import Menu from "../components/level15/Menu";
import PropTypes from "prop-types";

// Component for Level 15 - Multi-level menu
export default function Level15(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to the Technical skills menu by hovering over the Technical menu item.</li>
        <li>Navigate to the Software skills menu by hovering over the Software menu item.</li>
        <li>Navigate to the Google Suite skills menu by hovering over the Google Suite menu item.</li>
        <li>Navigate to the Drive Skills page by clicking on the Drive menu item.</li>
        <li>Learn about Drive from the information on the page.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for if the correct menu item is clicked
  const [isDriveClicked, setIsDriveClicked] = useState(false);

  // handles when the user clicks the correct menu item
  function handleDriveClick(e) {
    props.logClick(e, 15);
    setIsDriveClicked(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="find information about Google Drive."
      hintMessage="Google Drive is a software in the Google Suite."
      dialogMessage="Your mission is complete! Dropdown menus can be tricky to navigate, but moving the mouse slowly over each option can help. Click the X to receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        <Menu logClick={props.logClick} handleClick={handleDriveClick} />
        <br />
        <br />
        <br />
        {isDriveClicked && (
          <div>
            <img className="drive-img" alt="pic" src={GoogleDrive} />
            <Jewel left="50%" logClick={props.logClick} />
          </div>
        )}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level15.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
