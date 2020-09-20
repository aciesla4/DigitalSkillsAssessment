import React from "react";
import "../../css/Header.css";
import PropTypes from "prop-types";

// Header that appears at the top of each level
export default function Header(props) {
  return (
    <div className="header">
      <div className="header-content">Your Mission is: {props.mission}</div>
    </div>
  );
}

// defines the props the component expects
Header.propTypes = {
    mission: PropTypes.string   // string for what the mission is
}
