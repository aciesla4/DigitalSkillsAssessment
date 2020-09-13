import React from "react";
import "../../css/Header.css";

// Header that appears at the top of each level
export default function Header(props) {
  return (
    <div className="header">
      <div className="header-content">Your Mission is: {props.mission}</div>
    </div>
  );
}
