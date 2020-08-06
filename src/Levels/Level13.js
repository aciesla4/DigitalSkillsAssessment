import React from 'react';
import '../App.css';
import Level from '../util/Level';
import Jewel from '../util/Jewel';
import CustomChatbot from "../util/CustomChatbot";

class Level13 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJewelFound: false,
            academicMode: this.props.academicMode,
            isJewelShown: false,
        }
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
            isJewelFound: false
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
                logClick={this.props.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='chat with Mission Control.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='<TODO>'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! <TODO> Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <CustomChatbot handleEnd={this.handleEnd}/>
                    {this.state.isJewelShown && <Jewel top='75%' left='50%' handleFound={this.handleFound} />}
                </div>
            </Level>
        );
    }
}

export default Level13;