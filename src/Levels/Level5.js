import React, { useState } from "react";
import "../css/Level5.css";
import { ResizableBox } from "react-resizable";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import { useDispatch } from "react-redux";
import { changeLevel } from "../redux/slices/levelSlice";

export default function Level5(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);

  const dispatch = useDispatch();

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    setIsJewelFound(false);
    dispatch(changeLevel());
  }

  function handleResize(e) {
    e.currentTarget.id = "level 5 box resized";
    props.logClick(e);
  }

  return (
    <Level
      level={5}
      logClick={props.logClick}
      mission="resize the box."
      hintMessage="Resizing can be done by clicking the handle in the lower right of the box, and dragging it to make the box bigger or smaller."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Resizing is a common way to make things bigger or smaller. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <Jewel top="25%" left="25%" handleFound={handleFound} />
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
