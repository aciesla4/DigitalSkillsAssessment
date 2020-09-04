import React, { useState } from "react";
import "../css/Level5.css";
import Level from "../components/common/Level";
import Login from "../components/level14/Login";
import ForgotPassword from "../components/level14/ForgotPassword";
import ResetPassword from "../components/level14/ResetPassword";
import Jewel from "../components/common/Jewel";

export default function Level14(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showDone, setShowDone] = useState(false);

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    isJewelFound(false);
    props.getLevelChange();
  }

  function changeView(view) {
    if (view === "forgotPassword") {
      setShowLogin(!showLogin);
      setShowForgotPassword(!showForgotPassword);
    } else if (view === "resetPassword") {
      setShowForgotPassword(!showForgotPassword);
      setShowResetPassword(!showResetPassword);
    } else if (view === "resetToLogin") {
      setShowResetPassword(!showResetPassword);
      setShowLogin(!showLogin);
    } else if (view === "showDone") {
      setShowLogin(!showLogin);
      setShowDone(!showDone);
    }
  }

  return (
    <Level
      level={14}
      logClick={props.logClick}
      mission='log into the learning portal using the username "agent203@spyacademy.org" and password "password"'
      hintMessage="You may not have the right password. Try resetting it."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! It is easy to forget passwords, but also easy to reset them. Most sites will email you a link to reset your password in a similar manner. Click the X to return to the home page and receive your next mission."
    >
      <div>
        {showLogin && <Login changeView={changeView} />}
        {showForgotPassword && <ForgotPassword changeView={changeView} />}
        {showResetPassword && <ResetPassword changeView={changeView} />}
        {showDone && <Jewel left="50%" top="50%" handleFound={handleFound} />}
      </div>
    </Level>
  );
}
