import React from "react";
import NavBar from "../common/NavBar";
import Header from "../common/Header";
import EndDialog from "../common/EndDialog";
import LearningMode from "../common/LearningMode";
import Modal from "../common/Modal";
import $ from "jquery";

class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: true,
      academicmode: this.props.academicmode,
    };
  }

  componentDidMount() {
    $(document).ready(function() {
      $(".jewel").click(function() {
        $(".animates").css("animation-play-state", "paused");
      });
    });
  }

  getModeSwitch = (e) => {
    let oldValue = this.state.academicmode;
    this.setState({
      academicmode: !oldValue,
    });
    this.props.getModeSwitch(e);
  };

  render() {
    return (
      <div>
        <Header mission={this.props.mission} />
        <div style={{ marginTop: "5%" }}>{this.props.children}</div>
        <NavBar
          academicmode={this.props.academicmode}
          openHint={this.props.openHint}
          getModeSwitch={this.getModeSwitch}
        />
        {this.props.academicmode && (
          <LearningMode
            academicmode={this.props.academicmode}
            logClick={this.props.logClick}
          />
        )}
        <Modal
          id="hint"
          show={this.props.isHintShown}
          last={true}
          heading="Hint"
          closeModal={this.props.closeHint}
          x="75%"
          y="15%"
          modalStyle="modalR"
        >
          {this.props.hintMessage}
        </Modal>
        <EndDialog
          level={this.props.level}
          open={this.props.isJewelFound}
          handleCloseDialog={this.props.handleCloseDialog}
          academicmode={this.props.academicmode}
        >
          {this.props.dialogMessage}
        </EndDialog>
      </div>
    );
  }
}

export default Level;