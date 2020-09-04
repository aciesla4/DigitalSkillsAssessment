import React, { useState } from "react";
import "../css/Level15.css";
import GoogleDrive from "../images/googleDrive.jpg";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import Menu from "../components/level15/Menu";

export default function Level15(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);
  const [isDriveClicked, setIsDriveClicked] = useState(false);

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    isJewelFound(false);
    props.getLevelChange();
  }

  function handleDriveClick(e) {
    props.logClick(e);
    setIsDriveClicked(true);
  }

  return (
    <Level
      level={15}
      logClick={props.logClick}
      mission="find information about Google Drive."
      openHint={props.openHint}
      closeHint={props.closeHint}
      isHintShown={props.isHintShown}
      hintMessage="Google Drive is a software in the Google Suite."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
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
            <Jewel left="50%" handleFound={handleFound} />
          </div>
        )}
      </div>
    </Level>
  );
}
