import React, { useState } from "react";
import Level from "../components/common/Level";
import SimpleMap from "../components/level12/SimpleMap";

export default function Level12(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    setIsJewelFound(false);
    props.getLevelChange();
  }

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
      level={12}
      logClick={props.logClick}
      mission="find Copper Harbor on the map."
      hintMessage="You can scroll using the scroll wheel on your mouse and zoom in and out using the + and - buttons in the top left."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! <Something helpful about maps> Click the X to return to the home page and receive your next mission."
    >
      <div>
        <SimpleMap handleFound={handleFound} logClick={logMapClick} />
      </div>
    </Level>
  );
}
