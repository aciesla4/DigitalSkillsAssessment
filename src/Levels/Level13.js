import React, { useState } from "react";
import "../css/Level13.css";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import CustomChatbot from "../components/level13/CustomChatbot";

// Component for Level 13 - Using a chat box
export default function Level13(props) {
  // local state for if the jewel is shown
  const [isJewelShown, setIsJewelShown] = useState(false);

  // handles showing the jewel when the conversation is complete
  function handleEnd() {
    setIsJewelShown(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="chat with Mission Control."
      hintMessage="Click on a response option given by HQ and then type a response in the message field if prompted."
      dialogMessage="Your mission is complete! Chatting can be done on most websites, whether your chatting with a friend or chatting with a customer service representative. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <CustomChatbot handleEnd={handleEnd} />
        {isJewelShown && (
          <Jewel top="75%" left="50%" logClick={props.logClick} />
        )}
      </div>
    </Level>
  );
}
