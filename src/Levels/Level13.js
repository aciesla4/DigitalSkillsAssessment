import React from "react";
import "../css/Level13.css";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import CustomChatbot from "../components/level13/CustomChatbot";

class Level13 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isJewelFound: false,
      academicMode: this.props.academicMode,
      isJewelShown: false,
    };
  }

  handleFound = (e) => {
    this.props.logClick(e);
    this.setState({
      isJewelFound: true,
    });
  };

  handleCloseDialog = (e) => {
    this.props.logClick(e);
    this.setState({
      isJewelFound: false,
    });
    this.props.getLevelChange();
  };

  handleEnd = () => {
    this.setState({
      isJewelShown: true,
    });
  };

  render() {
    return (
      <Level
        level={13}
        logClick={this.props.logClick}
        academicmode={this.props.academicmode}
        getModeSwitch={this.props.getModeSwitch}
        mission="chat with Mission Control."
        openHint={this.props.openHint}
        closeHint={this.props.closeHint}
        isHintShown={this.props.isHintShown}
        hintMessage="Click on a response option given by HQ and then type a response in the message field if prompted."
        isJewelFound={this.state.isJewelFound}
        handleCloseDialog={this.handleCloseDialog}
        dialogMessage="Your mission is complete! Chatting can be done on most websites, whether your chatting with a friend or chatting with a customer service representative. Click the X to return to the home page and receive your next mission."
      >
        <div>
          <CustomChatbot handleEnd={this.handleEnd} />
          {this.state.isJewelShown && (
            <Jewel top="75%" left="50%" handleFound={this.handleFound} />
          )}
        </div>
      </Level>
    );
  }
}

export default Level13;
