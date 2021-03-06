import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import EndDialog from "./EndDialog";
import LearningMode from "./LearningMode";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectAcademicMode } from "../../redux/slices/academicModeSlice";
import { closeHint, selectHint } from "../../redux/slices/hintSlice";
import { changeLevel, selectLevel } from "../../redux/slices/levelSlice";
import { setFound, selectJewel } from "../../redux/slices/jewelSlice";
import $ from "jquery";
import PropTypes from "prop-types";
import axios from "axios";

// Base component for each level that hold common code
export default function Level(props) {
    // redux - allows methods to be called to modify global state
  const dispatch = useDispatch();

  // redux - gets the value of the global variables below
  const academicMode = useSelector(selectAcademicMode);
  const hint = useSelector(selectHint);
  const jewel = useSelector(selectJewel);
  const level = useSelector(selectLevel);

  // hook for using jquery to animate the jewel
  useEffect(() => {
    $(document).ready(function() {
      $(".jewel").click(function() {
        $(".animates").css("animation-play-state", "paused");
      });
    });
  });

  // hook for logging the level's start time
  useEffect(() => {
      const dt = new Date().getTime();
      // makes an HTTP request to the logging server
      axios({
          method: "post",
          url: "https://digital-skills-server.herokuapp.com/time/levelStartTime?level=" + level,
          data: {
              startTime: dt,
          },
      });
  }, [level]);

  // handles closing the dialog at the end of each level
  function handleCloseDialog() {
    dispatch(setFound());
    dispatch(changeLevel());
  }

  return (
    <div>
      <Header mission={props.mission} />
      <div style={{ marginTop: "5%" }}>{props.children}</div>
      <NavBar logClick={props.logClick} level={level}/>
      {academicMode && (
        <LearningMode academicmode={academicMode} logClick={props.logClick} />
      )}
      <Modal
        id="hint"
        show={hint}
        last={true}
        heading="Hint"
        closeModal={(e) => {
            props.logClick(e, level)
            dispatch(closeHint())
        }}
        x="75%"
        y="15%"
        modalStyle="modalR"
      >
        {props.hintMessage}
      </Modal>
      <EndDialog
        level={level}
        open={jewel}
        handleCloseDialog={handleCloseDialog}
        academicmode={academicMode}
        correctMoves={props.correctMoves}
      >
        {props.dialogMessage}
      </EndDialog>
    </div>
  );
}

// defines what props the component expects
Level.propTypes = {
    logClick: PropTypes.func,           // function that handles when the user clicks on an object
    mission: PropTypes.string,          // string that holds what the level's mission is
    hintMessage: PropTypes.string,      // string that holds the message in the hint
    dialogMessage: PropTypes.string,    // string that holds the message in the end dialog
    correctMoves: PropTypes.object      // object that holds a list of moves that the user could use to finish the level
}
