import React, { useState } from "react";
import "../css/Level13.css";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import CustomChatbot from "../components/level13/CustomChatbot";
import { useDispatch } from "react-redux";
import { changeLevel } from "../redux/slices/levelSlice";

export default function Level13(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);
  const [isJewelShown, setIsJewelShown] = useState(false);

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

  function handleEnd() {
    setIsJewelShown(true);
  }

  return (
    <Level
      level={13}
      logClick={props.logClick}
      mission="chat with Mission Control."
      hintMessage="Click on a response option given by HQ and then type a response in the message field if prompted."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Chatting can be done on most websites, whether your chatting with a friend or chatting with a customer service representative. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <CustomChatbot handleEnd={handleEnd} />
        {isJewelShown && (
          <Jewel top="75%" left="50%" handleFound={handleFound} />
        )}
      </div>
    </Level>
  );
}
