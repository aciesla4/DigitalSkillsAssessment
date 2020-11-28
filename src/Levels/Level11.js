import React, { useState } from "react";
import "../css/Level10.css";
import Settings from "../components/level10/Settings";
import Drawer from "../components/level10/Drawer";
import CloudSettings from "../components/level10/CloudSettings";
import PrivacySettings from "../components/level10/PrivacySettings";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import PropTypes from "prop-types";


// Component for Level 11 - finding a setting and using a commitment menu
export default function Level11(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to to the privacy settings by clicking the Privacy button.</li>
        <li>Navigate to the cloud settings scrolling down in the menu on the left.</li>
        <li>Navigate to the cloud settings by clicking on the Cloud button in the left menu.</li>
        <li>Change the notes settings by unchecking the box next to Notes.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for if the privacy button is clicked
  const [isPrivacyClicked, setIsPrivacyClicked] = useState(false);
  // local state for if the cloud button is clicked
  const [isCloudClicked, setIsCloudClicked] = useState(false);
  // local state for if the noted checkbox is checked
  const [notesOn, setNotesOn] = useState(true);
  // local state for if the jewel is shown
  const [isJewelShown, setIsJewelShown] = useState(false);

  // handles when the privacy button is clicked by setting local state to true
  function handlePrivacyClick(e) {
    props.logClick(e, 11);
    setIsPrivacyClicked(true);
  }

  // handles when the cloud button is clicked by setting local state to true and setting the color
  function handleCloudClick(e) {
    props.logClick(e, 11);
    setIsCloudClicked(true);
  }

  // handles when the notes checkbox is checked by setting local state to false and showing the jewel
  function handleNotesChange(e) {
    props.logClick(e, 11);
    setNotesOn(false);
    setIsJewelShown(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="stop saving Notes in your Cloud."
      hintMessage="Click on the button labeled privacy. Then scroll down on the left side to find the button labeled Cloud. Then uncheck the box labeled Notes."
      dialogMessage="Your mission is complete! Sometimes settings are buried in multiple menus. Click the X to receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        {!isPrivacyClicked && (
          <Settings handleClick={handlePrivacyClick} logClick={props.logClick} />
        )}
        {isPrivacyClicked && (
          <div className="privacy-container">
            <Drawer handleClick={handleCloudClick} logClick={props.logClick}/>
            {isCloudClicked ? (
              <div>
                <CloudSettings handleClick={handleNotesChange} notesOn={notesOn} logClick={props.logClick} />
                <br />
                <br />
                {isJewelShown && <Jewel logClick={props.logClick} />}
              </div>
            ) : (
              <PrivacySettings logClick={props.logClick}/>
            )}
          </div>
        )}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level11.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}