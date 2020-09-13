import React from "react";
import "../../css/NavBar.css";
import { FormControlLabel, Switch, IconButton } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { useSelector, useDispatch } from "react-redux";
import {
  update,
  selectAcademicMode,
} from "../../redux/slices/academicModeSlice";
import { openHint } from "../../redux/slices/hintSlice";

// Component for the navigation bar the appears at the bottom of each level
export default function NavBar(props) {
    // gets the current url of the page
  const currentPath = window.location.pathname;

  // redux - gets the current value of academicMode from global state
  const academicMode = useSelector(selectAcademicMode);
  // redux - allows methods to be called to update global state
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <FormControlLabel
        style={{ position: "absolute", left: 20, color: "black", bottom: 10 }}
        control={
          <Switch
            id="learning mode switch"
            checked={academicMode}
            onChange={() => dispatch(update())}
          />
        }
        label="Learning Mode"
      />
      {currentPath.includes("level") && (
        <IconButton
          style={{ position: "absolute", right: 0, bottom: 0 }}
          id="open hint button"
          onClick={() => dispatch(openHint())}
        >
          <HelpIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  );
}
