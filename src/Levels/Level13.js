import React, { useState } from "react";
import "../css/Level13.css";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import CustomChatbot from "../components/level13/CustomChatbot";
import PropTypes from "prop-types";

// Component for Level 13 - Using a chat box
export default function Level13(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Learn how to respond to Mission Control by reading the response options.</li>
        <li>Change you response by clicking on one of the responses.</li>
        <li>Learn Mission Control's response by reading it.</li>
        <li>Change your response by typing in the chat box if prompted and click the send button.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

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
      correctMoves={correctMoves}
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

// defines the props the component expects
Level13.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
