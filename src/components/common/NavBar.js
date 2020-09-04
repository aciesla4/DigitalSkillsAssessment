import React, { useEffect } from "react";
import "../../css/NavBar.css";
import { FormControlLabel, Switch, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HelpIcon from "@material-ui/icons/Help";
import { useSelector, useDispatch } from "react-redux";
import {
  update,
  selectAcademicMode,
} from "../../redux/slices/academicModeSlice";
import { openHint } from "../../redux/slices/hintSlice";
import { selectLevel } from "../../redux/slices/levelSlice";
import { Link as RouterLink } from "react-router-dom";
import $ from "jquery";

export default function NavBar(props) {
  const currentPath = window.location.pathname;

  const academicMode = useSelector(selectAcademicMode);
  const level = useSelector(selectLevel);
  const dispatch = useDispatch();

  useEffect(() => {
    $(document).ready(function() {
      $(".stop-animation").click(function() {
        $(".animated").css("animation-play-state", "paused");
      });
    });
  });

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
      {currentPath.includes("level") ? (
        <IconButton
          style={{ position: "absolute", left: "50%", bottom: 0 }}
          id="home button"
          component={RouterLink}
          to="/home"
          onClick={props.logClick}
        >
          <HomeIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton
          style={{ position: "absolute", left: "50%", bottom: 0 }}
          id="check button"
          component={RouterLink}
          to={`/level${level}`}
          onClick={props.logClick}
        >
          <CheckCircleIcon fontSize="large" />
        </IconButton>
      )}
      {currentPath.includes("level") ? (
        <IconButton
          style={{ position: "absolute", right: 0, bottom: 0 }}
          id="open hint button"
          onClick={() => dispatch(openHint())}
        >
          <HelpIcon fontSize="large" />
        </IconButton>
      ) : (
        <div className="animated">
          <IconButton
            className={"stop-animation"}
            id="phone button"
            onClick={props.getPhoneClick}
          >
            <PhoneIcon fontSize="large" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
