import React, { useState } from "react";
import "../css/Level15.css";
import GoogleDrive from "../images/googleDrive.jpg";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import Menu from "../components/level15/Menu";

// Component for Level 15 - Multi-level menu
export default function Level15(props) {
  // local state for if the correct menu item is clicked
  const [isDriveClicked, setIsDriveClicked] = useState(false);

  // handles when the user clicks the correct menu item
  function handleDriveClick(e) {
    props.logClick(e);
    setIsDriveClicked(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="find information about Google Drive."
      hintMessage="Google Drive is a software in the Google Suite."
      dialogMessage="Your mission is complete! Dropdown menus can be tricky to navigate, but moving the mouse slowly over each option can help. Click the X to return to the home page and receive your next mission."
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
