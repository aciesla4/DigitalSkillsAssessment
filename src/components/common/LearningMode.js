import React, { useState } from "react";
import "../../css/Modal.css";
import { useSelector } from "react-redux";
import { selectAcademicMode } from "../../redux/slices/academicModeSlice";
import {selectLevel} from "../../redux/slices/levelSlice";
import Modal from "./Modal";
import PropTypes from "prop-types";

// Component for introductory modals
export default function LearningMode(props) {
  // redux - gets the global state for academicMode
  const academicMode = useSelector(selectAcademicMode);
  //const level = useSelector(selectLevel())

  // sets whether the modals should be open to if academicMode is enabled
  let open = academicMode;

  // local state for if the level1 and level2 modals are open
  const [level1, setLevel1] = useState([open, false]);
  const [level2, setLevel2] = useState([open]);

  // handles opening the next modal for level 1
  function openNextLevel1(index, e) {
    props.logClick(e);
    let update = [...level1];
    update[index] = false;
    update[index + 1] = true;
    setLevel1([...update]);
  }

  // handles closing the last modal for level 1
  function closeLevel1(e) {
    props.logClick(e);
    let update = [...level1];
    let length = level1.length;
    update[length - 1] = false;
    setLevel1([...update]);
  }

  // handles closing the modal for level 2
  function closeLevel2(e) {
    props.logClick(e);
    let update = [...level2];
    let length = level2.length;
    update[length - 1] = false;
    setLevel2([...update]);
  }

  // determines the url of the current page and it's length
  const currentPath = window.location.pathname;
  const len = currentPath.length;
  return (
    <div>
      {currentPath.substring(len - 6) === "level1" && (
        <div id="level1">
          <Modal
            show={level1[0]}
            heading="Learning Mode"
            openNext={(e) => openNextLevel1(0, e)}
            x="0"
            y="15%"
            modalStyle="modalL"
          >
            Click the slider to turn learning mode off or on. Learning mode
            gives you extra tips on how to use the site and complete levels.
          </Modal>
          <Modal
            show={level1[1]}
            last={true}
            heading="Question Button"
            closeModal={closeLevel1}
            x="75%"
            y="15%"
            modalStyle="modalR"
          >
            Click this button to get a hint on how to complete the level.
          </Modal>
        </div>
      )}
      {currentPath.includes("level2") && (
        <div id="level2">
          <Modal
            show={level2[0]}
            last={true}
            heading="Hint"
            closeModal={closeLevel2}
            x="75%"
            y="15%"
            modalStyle="modalR"
          >
            Pop ups can be closed by clicking the X in the top right corner.
          </Modal>
        </div>
      )}
    </div>
  );
}

// defines what props the component expects
LearningMode.propTypes = {
  logClick: PropTypes.func    // function the handles when the user clicks on an object
}
