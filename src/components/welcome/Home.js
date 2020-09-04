import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAcademicMode } from "../../redux/slices/academicModeSlice";
import NavBar from "../common/NavBar";
import Messages from "./Messages";
import LearningMode from "../common/LearningMode";
import messageList from "./MessageList";

export default function Home(props) {
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const [messages] = useState(messageList);

  const [member] = useState({ username: "spy", color: "blue" });

  const academicMode = useSelector(selectAcademicMode);

  function getPhoneClick(e) {
    props.logClick(e);
    setIsPhoneClicked(true);
  }

  function getMessages() {
    var i;
    const newMessages = [];
    for (i = 0; i < messages.length; i++) {
      if (messages[i].level === props.level) {
        newMessages.push(messages[i]);
      }
    }
    return newMessages;
  }

  let displayMessages = getMessages();
  return (
    <div>
      {isPhoneClicked && (
        <Messages messages={displayMessages} currentMember={member} />
      )}
      {academicMode && <LearningMode logClick={props.logClick} />}
      <NavBar
        level={props.level}
        getPhoneClick={getPhoneClick}
        clicked={isPhoneClicked}
        getLevelChange={props.getLevelChange}
      />
    </div>
  );
}
