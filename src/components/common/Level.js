import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import EndDialog from "./EndDialog";
import LearningMode from "./LearningMode";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectAcademicMode } from "../../redux/slices/academicModeSlice";
import { openHint, closeHint, selectHint } from "../../redux/slices/hintSlice";
import { changeLevel, selectLevel } from "../../redux/slices/levelSlice";
import { setFound, selectJewel } from "../../redux/slices/jewelSlice";
import $ from "jquery";

export default function Level(props) {
  const dispatch = useDispatch();
  const academicMode = useSelector(selectAcademicMode);
  const hint = useSelector(selectHint);
  const jewel = useSelector(selectJewel);
  const level = useSelector(selectLevel);

  useEffect(() => {
    $(document).ready(function() {
      $(".jewel").click(function() {
        $(".animates").css("animation-play-state", "paused");
      });
    });
  });

  function handleCloseDialog(e) {
    props.logClick(e);
    dispatch(setFound());
    dispatch(changeLevel());
  }

  return (
    <div>
      <Header mission={props.mission} />
      <div style={{ marginTop: "5%" }}>{props.children}</div>
      <NavBar openHint={() => dispatch(openHint())} />
      {academicMode && (
        <LearningMode academicmode={academicMode} logClick={props.logClick} />
      )}
      <Modal
        id="hint"
        show={hint}
        last={true}
        heading="Hint"
        closeModal={() => dispatch(closeHint())}
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
      >
        {props.dialogMessage}
      </EndDialog>
    </div>
  );
}
