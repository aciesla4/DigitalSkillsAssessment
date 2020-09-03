import React from "react";
import "../css/Level3.css";
import Dog from "../images/dog.jpg";
import Cat from "../images/cat.jpg";
import Card from "../components/level3/Card";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";

class Level3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isJewelFound: false,
      academicmode: this.props.academicmode,
      elements: this.renderCards(),
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

  showJewel = (e) => {
    this.props.logClick(e);
    let update = this.state.elements;
    update[23] = (
      <div>
        <Jewel handleFound={this.handleFound} />
      </div>
    );
    this.setState({
      elements: update,
    });
  };

  handleCardClick = (e) => {
    this.props.logClick(e);
  };

  renderCards = () => {
    const items = [];
    for (var i = 0; i < 32; i++) {
      if (i === 23) {
        items.push(<Card key={i} id={i} pic={Cat} onClick={this.showJewel} />);
      } else {
        items.push(
          <Card key={i} id={i} pic={Dog} onClick={this.handleCardClick} />
        );
      }
    }
    return items;
  };

  render() {
    return (
      <Level
        level={3}
        logClick={this.props.logClick}
        academicmode={this.props.academicmode}
        getModeSwitch={this.props.getModeSwitch}
        mission="find the cat image."
        openHint={this.props.openHint}
        closeHint={this.props.closeHint}
        isHintShown={this.props.isHintShown}
        hintMessage="Look in the bottom right hand corner for the cat image."
        isJewelFound={this.state.isJewelFound}
        handleCloseDialog={this.handleCloseDialog}
        dialogMessage="Your mission is complete! Changing the view when searching for an image can help you find the one you are looking for. Click the X to return to the home page and receive your next mission."
      >
        <div className="level3-grid">
          <div className="level3-content">
            {this.state.elements.slice(0, 4)}
          </div>
          <div className="level3-content">
            {this.state.elements.slice(4, 8)}
          </div>
          <div className="level3-content">
            {this.state.elements.slice(8, 12)}
          </div>
          <div className="level3-content">
            {this.state.elements.slice(12, 16)}
          </div>
          <div className="level3-content">
            {this.state.elements.slice(16, 20)}
          </div>
          <div className="level3-content">
            {this.state.elements.slice(20, 24)}
          </div>
          <div className="level3-content">
            {this.state.elements.slice(24, 28)}
          </div>
          <div className="level3-content">
            {this.state.elements.slice(28, 32)}
          </div>
        </div>
      </Level>
    );
  }
}

export default Level3;
