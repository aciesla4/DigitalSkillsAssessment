import React, { useEffect } from "react";
import NavBar from "../common/NavBar";
import Header from "../common/Header";
import EndDialog from "../common/EndDialog";
import LearningMode from "../common/LearningMode";
import Modal from "../common/Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectAcademicMode } from "../../redux/slices/academicModeSlice";
import { openHint, closeHint, selectHint } from "../../redux/slices/hintSlice";
import $ from "jquery";

export default function Level(props) {
  const dispatch = useDispatch();
  const academicMode = useSelector(selectAcademicMode);
  const hint = useSelector(selectHint);

  useEffect(() => {
    $(document).ready(function() {
      $(".jewel").click(function() {
        $(".animates").css("animation-play-state", "paused");
      });
    });
  });

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
        level={props.level}
        open={props.isJewelFound}
        handleCloseDialog={props.handleCloseDialog}
        academicmode={academicMode}
      >
        {props.dialogMessage}
      </EndDialog>
    </div>
  );
}
