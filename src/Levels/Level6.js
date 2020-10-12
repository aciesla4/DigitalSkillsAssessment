import React, { useState } from "react";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import EnhancedTable from "../components/level6/EnhancedTable";
import PropTypes from "prop-types";

// Component for Level 6 - sorting data in a table
export default function Level6(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Change the order of the list contents by clicking on the column headers.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for whether the jewel is shown and how many times the user has sorted the table
  const [isJewelShown, setIsJewelShown] = useState(false);
  const [count, setCount] = useState(0);

  // handles showing the jewel when the user has sorted the table five times
  function showJewel() {
    setCount(count + 1);
    if (count === 4) {
      setIsJewelShown(true);
    }
  }

  return (
    <Level
      logClick={props.logClick}
      mission="click on the sort icons to see their effect."
      hintMessage="The sort icons are the arrows next to the column headings. When clicked, they alternative between sorting the column in ascending and descending order. "
      dialogMessage="Your mission is complete! Sorting helps you to find the information you are looking for quicker. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        <EnhancedTable showJewel={showJewel} logClick={props.logClick} />
        {isJewelShown && (
          <Jewel top="55px" left="68%" logClick={props.logClick} />
        )}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level6.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}