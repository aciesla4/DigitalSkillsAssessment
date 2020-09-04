import React, { useState } from "react";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import EnhancedTable from "../components/level6/EnhancedTable";

export default function Level6(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);
  const [isJewelShown, setIsJewelShown] = useState(false);
  const [count, setCount] = useState(0);

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    isJewelFound(false);
    props.getLevelChange();
  }

  function showJewel() {
    setCount(count + 1);
    if (count === 4) {
      setIsJewelShown(true);
    }
  }

  return (
    <Level
      level={6}
      logClick={props.logClick}
      mission="click on the sort icons to see their effect."
      openHint={props.openHint}
      closeHint={props.closeHint}
      isHintShown={props.isHintShown}
      hintMessage="The sort icons are the arrows next to the column headings. When clicked, they alternative between sorting the column in ascending and descending order. "
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Sorting helps you to find the information you are looking for quicker. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <EnhancedTable showJewel={showJewel} logClick={props.logClick} />
        {isJewelShown && (
          <Jewel top="55px" left="68%" handleFound={handleFound} />
        )}
      </div>
    </Level>
  );
}
