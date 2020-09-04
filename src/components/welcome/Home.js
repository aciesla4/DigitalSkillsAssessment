import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAcademicMode } from "../../redux/slices/academicModeSlice";
import { selectLevel } from "../../redux/slices/levelSlice";
import NavBar from "../common/NavBar";
import Messages from "./Messages";
import LearningMode from "../common/LearningMode";
import messageList from "./MessageList";

export default function Home(props) {
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const [messages] = useState(messageList);

  const [member] = useState({ username: "spy", color: "blue" });

  const academicMode = useSelector(selectAcademicMode);
  const level = useSelector(selectLevel);

  function getPhoneClick() {
    setIsPhoneClicked(true);
  }

  function getMessages() {
    var i;
    const newMessages = [];
    for (i = 0; i < messages.length; i++) {
      if (messages[i].level === level) {
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
      <NavBar getPhoneClick={getPhoneClick} logClick={props.logClick} />
    </div>
  );
}
