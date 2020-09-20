import React from "react";
import "../css/Level5.css";
import { ResizableBox } from "react-resizable";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import PropTypes from "prop-types";

// Component for Level 5 - Resizing a box
// See https://www.npmjs.com/package/react-resizable
export default function Level5(props) {
  // logs when the box is resized
  function handleResize(e) {
    e.currentTarget.id = "level 5 box resized";
    props.logClick(e);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="resize the box."
      hintMessage="Resizing can be done by clicking the handle in the lower right of the box, and dragging it to make the box bigger or smaller."
      dialogMessage="Your mission is complete! Resizing is a common way to make things bigger or smaller. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <Jewel top="25%" left="25%" logClick={props.logClick} />
        <ResizableBox
          id="level 5 box resized"
          width={1250}
          height={450}
          minConstraints={[100, 100]}
          maxConstraints={[1530, 600]}
          onResizeStop={handleResize}
        />
      </div>
    </Level>
  );
}

// defines the props the component expects
Level5.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}