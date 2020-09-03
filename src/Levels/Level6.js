import React from "react";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import EnhancedTable from "../components/level6/EnhancedTable";

class Level6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isJewelFound: false,
      isJewelShown: false,
      count: 0,
      academicmode: this.props.academicmode,
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

  showJewel = () => {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count === 4) {
      this.setState({
        isJewelShown: true,
      });
    }
  };

  render() {
    return (
      <Level
        level={6}
        logClick={this.props.logClick}
        academicmode={this.props.academicmode}
        getModeSwitch={this.props.getModeSwitch}
        mission="click on the sort icons to see their effect."
        openHint={this.props.openHint}
        closeHint={this.props.closeHint}
        isHintShown={this.props.isHintShown}
        hintMessage="The sort icons are the arrows next to the column headings. When clicked, they alternative between sorting the column in ascending and descending order. "
        isJewelFound={this.state.isJewelFound}
        handleCloseDialog={this.handleCloseDialog}
        dialogMessage="Your mission is complete! Sorting helps you to find the information you are looking for quicker. Click the X to return to the home page and receive your next mission."
      >
        <div>
          <EnhancedTable
            showJewel={this.showJewel}
            logClick={this.props.logClick}
          />
          {this.state.isJewelShown && (
            <Jewel top="55px" left="68%" handleFound={this.handleFound} />
          )}
        </div>
      </Level>
    );
  }
}

export default Level6;
