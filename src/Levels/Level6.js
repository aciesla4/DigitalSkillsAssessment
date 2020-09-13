import React, { useState } from "react";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import EnhancedTable from "../components/level6/EnhancedTable";

// Component for Level 6 - sorting data in a table
export default function Level6(props) {
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
