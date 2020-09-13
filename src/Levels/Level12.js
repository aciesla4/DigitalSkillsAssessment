import React from "react";
import Level from "../components/common/Level";
import SimpleMap from "../components/level12/SimpleMap";

// Component for Level 12 - navigating a map
export default function Level12(props) {
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
      dialogMessage="Your mission is complete! <Something helpful about maps> Click the X to return to the home page and receive your next mission."
    >
      <div>
        <SimpleMap logClick={props.logClick} logMapClick={logMapClick} />
      </div>
    </Level>
  );
}
