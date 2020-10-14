import React, { useState } from "react";
import "../css/Level14.css";
import Level from "../components/common/Level";
import Login from "../components/level14/Login";
import ForgotPassword from "../components/level14/ForgotPassword";
import ResetPassword from "../components/level14/ResetPassword";
import Jewel from "../components/common/Jewel";
import PropTypes from "prop-types";

// Component for Level 14 - resetting a password
export default function Level14(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Learn the given password is incorrect by typing in the given email and password and clicking submit.</li>
        <li>Navigate to the forgot password page by clicking the Forgot Password button.</li>
        <li>Get a link to reset your password by entering in the given email.</li>
        <li>Navigate to the reset password page by clicking the button displayed.</li>
        <li>Change your password by entering the email and new password and clicking the Submit button.</li>
        <li>Navigate to the jewel page by entering the correct email and password and clicking the Submit button.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for if the login page is shown
  const [showLogin, setShowLogin] = useState(true);
  // local state for if the forgot password page is shown
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  // local state for if the reset password page is shown
  const [showResetPassword, setShowResetPassword] = useState(false);
  // local state for if the final page is shown
  const [showDone, setShowDone] = useState(false);

  // handles rendering the different pages by updating local state
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
      logClick={props.logClick}
      mission='log into the learning portal using the username "agent203@spyacademy.org" and password "password".'
      hintMessage="You may not have the right password. Try resetting it."
      dialogMessage="Your mission is complete! It is easy to forget passwords, but also easy to reset them. Most sites will email you a link to reset your password in a similar manner. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        {showLogin && <Login changeView={changeView} />}
        {showForgotPassword && <ForgotPassword changeView={changeView} />}
        {showResetPassword && <ResetPassword changeView={changeView} />}
        {showDone && <Jewel left="50%" top="50%" logClick={props.logClick} />}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level14.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
