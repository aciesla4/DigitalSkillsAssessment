import React, { useState } from "react";
import "../../css/Modal.css";
import { useSelector } from "react-redux";
import { selectAcademicMode } from "../../redux/slices/academicModeSlice";
import Modal from "./Modal";

export default function LearningMode(props) {
  const academicMode = useSelector(selectAcademicMode);

  let open = academicMode;

  const [home, setHome] = useState([open, false, false]);
  const [level1, setLevel1] = useState([open, false]);
  const [level2, setLevel2] = useState([open]);

  function openNextHome(index, e) {
    props.logClick(e);
    let update = home;
    update[index] = false;
    update[index + 1] = true;
    setHome(update);
  }

  function closeHome(e) {
    props.logClick(e);
    let update = home;
    let length = length;
    update[length - 1] = false;
    setHome(update);
  }

  function openNextLevel1(index, e) {
    props.logClick(e);
    let update = level1;
    update[index] = false;
    update[index + 1] = true;
    setLevel1(update);
  }

  function closeLevel1(e) {
    props.logClick(e);
    let update = level1;
    let length = level1.length;
    update[length - 1] = false;
    setLevel1(update);
  }

  function closeLevel2() {
    let update = level2;
    let length = level2.length;
    update[length - 1] = false;
    setLevel2(update);
  }

  const currentPath = window.location.pathname;
  const len = currentPath.length;
  return (
    <div>
      {currentPath.includes("home") && (
        <div id="home" style={{ width: "100%" }}>
          <Modal
            show={home[0]}
            heading="Learning Mode"
            openNext={(e) => openNextHome(0, e)}
            x="0"
            y="15%"
            modalStyle="modalL"
          >
            Click the slider to turn learning mode off or on. Learning mode
            gives you extra tips on how to use the site and complete levels.
          </Modal>
          <Modal
            show={home[1]}
            heading="Check Button"
            openNext={(e) => openNextHome(1, e)}
            x="40%"
            y="15%"
            modalStyle="my-modal"
          >
            Click this button to begin a level.
          </Modal>
          <Modal
            show={home[2]}
            last={true}
            heading="Phone Button"
            closeModal={closeHome}
            y="15%"
            modalStyle="modalR"
          >
            When this rings, HQ is calling. Click to pick it up and receive
            their message.
          </Modal>
        </div>
      )}
      {currentPath.substring(len - 6) === "level1" && (
        <div id="level1">
          <Modal
            show={level1[0]}
            heading="Home Button"
            openNext={(e) => openNextLevel1(0, e)}
            x="40%"
            y="15%"
            modalStyle="my-modal"
          >
            Click this button to return to the home page.
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
