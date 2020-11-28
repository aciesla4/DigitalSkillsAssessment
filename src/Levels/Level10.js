import React, { useState } from "react";
import "../css/Level10.css";
import Drawer from "../components/level10/Drawer";
import Settings from "../components/level10/Settings";
import PrivacySettings from "../components/level10/PrivacySettings";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import PropTypes from "prop-types";

// Component for Level 10 - searching for a setting
export default function Level10(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to to the privacy settings by clicking the Privacy button.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for if the privacy button is clicked
  const [isPrivacyClicked, setIsPrivacyClicked] = useState(false);

  // handles when the privacy button is clicked by setting local state to true
  function handleClick(e) {
    props.logClick(e, 10);
    setIsPrivacyClicked(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="find the privacy settings."
      hintMessage="Click on the button labeled Privacy."
      dialogMessage="Your mission is complete! Sometimes it is easier to search for a setting than clicking around to find it. Click the X to receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        {!isPrivacyClicked && (
            <Settings handleClick={handleClick} logClick={props.logClick} />
        )}
        {isPrivacyClicked && (
          <div className="privacy-container">
            <Drawer handleClick={props.logClick} logClick={props.logClick} />
            <div>
              <PrivacySettings logClick={props.logClick}/>
              <br />
              <br />
              <Jewel logClick={props.logClick} />
            </div>
          </div>
        )}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level10.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
