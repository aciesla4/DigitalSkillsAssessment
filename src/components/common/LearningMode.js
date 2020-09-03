import React from "react";
import "../../css/Modal.css";
import Modal from "./Modal";

class LearningMode extends React.Component {
  constructor(props) {
    super(props);
    let open = this.props.academicmode;
    this.state = {
      home: [open, false, false],
      level1: [open, false],
      level2: [open],
    };
  }

  openNextHome = (index, e) => {
    this.props.logClick(e);
    let update = this.state.home;
    update[index] = false;
    update[index + 1] = true;
    this.setState({
      home: update,
    });
  };

  closeHome = (e) => {
    this.props.logClick(e);
    let update = this.state.home;
    let length = this.state.home.length;
    update[length - 1] = false;
    this.setState({
      home: update,
    });
  };

  openNextLevel1 = (index, e) => {
    this.props.logClick(e);
    let update = this.state.level1;
    update[index] = false;
    update[index + 1] = true;
    this.setState({
      level1: update,
    });
  };

  closeLevel1 = (e) => {
    this.props.logClick(e);
    let update = this.state.level1;
    let length = this.state.level1.length;
    update[length - 1] = false;
    this.setState({
      level1: update,
    });
  };

  closeLevel2 = () => {
    let update = this.state.level2;
    let length = this.state.level2.length;
    update[length - 1] = false;
    this.setState({
      level2: update,
    });
  };

  render() {
    const currentPath = window.location.pathname;
    const len = currentPath.length;
    return (
      <div>
        {currentPath.includes("home") && (
          <div id="home" style={{ width: "100%" }}>
            <Modal
              show={this.state.home[0]}
              heading="Learning Mode"
              openNext={(e) => this.openNextHome(0, e)}
              x="0"
              y="15%"
              modalStyle="modalL"
            >
              Click the slider to turn learning mode off or on. Learning mode
              gives you extra tips on how to use the site and complete levels.
            </Modal>
            <Modal
              show={this.state.home[1]}
              heading="Check Button"
              openNext={(e) => this.openNextHome(1, e)}
              x="40%"
              y="15%"
              modalStyle="my-modal"
            >
              Click this button to begin a level.
            </Modal>
            <Modal
              show={this.state.home[2]}
              last={true}
              heading="Phone Button"
              closeModal={this.closeHome}
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
              show={this.state.level1[0]}
              heading="Home Button"
              openNext={(e) => this.openNextLevel1(0, e)}
              x="40%"
              y="15%"
              modalStyle="my-modal"
            >
              Click this button to return to the home page.
            </Modal>
            <Modal
              show={this.state.level1[1]}
              last={true}
              heading="Question Button"
              closeModal={this.closeLevel1}
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
              show={this.state.level2[0]}
              last={true}
              heading="Hint"
              closeModal={this.closeLevel2}
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
}

export default LearningMode;
